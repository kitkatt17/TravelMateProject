const router = require('express').Router();
const userRoutes = require('./user-routes.js');


const savedRoutes = require('./city');

router.use('/city', savedRoutes);
router.use('/', userRoutes);

module.exports = router;

