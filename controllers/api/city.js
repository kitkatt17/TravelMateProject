const router = require('express').Router();
const { User, City, Event } = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.body);
    const cityData = await City.findOne({ where: { name: req.body.cityName } });
    console.log(cityData);
    if (!cityData) {
        City.create({ name: req.body.cityName, user_id: 1, image: req.body.image })
        //changed user_id from hardcoded 1, it saves cities with the hardcoding
    }
})

module.exports = router