const router = require('express').Router();
const controller = require('../controllers/bookingCtrl');

router.post('/', controller.booking);

module.exports = router;
