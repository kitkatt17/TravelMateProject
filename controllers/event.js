const { response } = require('express');

const router = require('express').Router();


router.get('/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const dataUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + process.env.API_KEY + "&city=" + city

        fetch(dataUrl).then(response => {
            return response.json()
        }).then(data => {
            console.log(data);

            let resultData = data._embedded.events;
            console.log(resultData);
            res.render('results', { resultData });
            //res.status(200).json(data); Used this while working on getting the data pulled correctly from the api.
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;


