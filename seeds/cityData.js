const { City } = require('../models');

const citydata = [
  {
    name: 'Sacramento',
    image: 'https://s1.ticketm.net/dam/a/4c8/cee4224d-ed9f-4267-81a4-61be2a1f44c8_ARTIST_PAGE_3_2.jpg',
    user_id: 1,
  },
  {
    name: 'Dallas',
    image: 'https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg',
    user_id: 1,
  },
  {
    name: 'Atlanta',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    user_id: 1,
  },

];

const seedCities = () => City.bulkCreate(citydata);

module.exports = seedCities;
