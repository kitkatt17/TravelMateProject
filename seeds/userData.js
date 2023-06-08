const { User } = require('../models');

const userdata = [
  {
    username: 'theBestUser',
    email: 'theBestUser@email.com',
    password: 'hashedPassword',
    profile_img_url: null,
    address: null,
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
