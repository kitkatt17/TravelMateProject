const router = require('express').Router();
const { User, City, Event } = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.body);
    const eventData = await Event.findOne({where:{URL:req.body.URL}});
    console.log(eventData);
    if(!eventData) {
    const cityId = await City.fineOne({where:{name:req.body.city}})
        Event.create({event_name:req.body.eventName, URL: req.body.url, image:req.body.image, starting_date:req.body.starting_date, genre:req.body.genre, location:req.body.location, city_id:cityId.id})
    }
})

module.exports=router