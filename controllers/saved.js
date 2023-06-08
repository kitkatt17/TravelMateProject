const router = require('express').Router();
const { User, City, Event } = require('../models');

router.get('/', async (req, res) => {
  console.log(req.session);
  const userId = 1;
  // changed from 1 to my test login id, did not change city list with differnet ids.
  try {
    const dbCityData = await City.findAll({
      WHERE: { user_id: userId }
    });

    const cities = dbCityData.map((city) =>
      city.get({ plain: true })
    );

    console.log(cities);
    res.render('userCities', { cities });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/city/:id', async (req, res) => {
  try {
    console.log('getting city info');
    const dbCityData = await City.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          attributes: [
            'id',
            'event_name',
            'URL',
            'image',
            'starting_date',
            //'price_range',
            'genre',
            'location',
            'city_id',
          ],
          // WHERE:{city_id:req.params.id}
        },
      ],
    });

    const city = dbCityData.get({ plain: true });
    console.log(city)
    res.render('userEachCity', { city });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/event/:id', async (req, res) => {
  try {
    console.log('getting event info');
    const dbEventData = await Event.findByPk(req.params.id, {
    });

    const event = dbEventData.get({ plain: true });
    res.render('userEvent', { event });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
