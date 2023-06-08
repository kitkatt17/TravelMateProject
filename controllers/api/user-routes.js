const router = require('express').Router();
const { User } = require('../../models');

// To create a new user //
router.post('/signup', async (req, res) => {
    try {
        console.log("hotdog!");
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const user = dbUserData.get({ plain: true });
        console.log(user);
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.id = user.id
            res.status(200).json(user);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// For the Login //
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again.' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again.' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.id = dbUserData.id;

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// For the Logout //
router.post('/logout', (req, res) => {
    // When the user Logs Out, it will destroy the current session //
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;