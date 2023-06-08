const User = require('./User');
const City = require('./City');
const Event = require('./Event');

User.hasMany(City, {
  foreignKey: 'user_id',
});

City.belongsTo(User, {
  foreignKey: 'user_id',
});

City.hasMany(Event, {
    foreignKey: 'city_id'
  });
  
  Event.belongsTo(City, {
    foreignKey: 'city_id',
  });

module.exports = { User, City, Event };
