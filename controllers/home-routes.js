const router = require('express').Router();

// route to get landing page
router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  /*   if (req.session.logged_in) {
      res.redirect('/');
      return;
    } */
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If a session exists, redirect the request to the homepage
  /*   if (req.session.logged_in) {
      res.redirect('/');
      return;
    } */
  res.render('signup');
});

router.get('/search', (req, res) => {
  // If a session exists, redirect the request to the homepage
  /*   if (req.session.logged_in) {
      res.redirect('/');
      return;
    } */
  res.render('search');
});



module.exports = router;