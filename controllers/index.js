
const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

const savedRoutes = require('./saved');
router.use('/saved', savedRoutes);

const eventRoutes = require('./event');
router.use('/event', eventRoutes);

module.exports = router;


