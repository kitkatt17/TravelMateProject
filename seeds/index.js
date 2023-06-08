const sequelize = require('../config/connection');
const seedCities = require('./cityData');
const seedEvents = require('./eventData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedCities();

  await seedEvents();

  process.exit(0);
};

seedAll();