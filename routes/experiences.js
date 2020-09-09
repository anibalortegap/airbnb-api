const router = require('express').Router();
const controller = require('../controllers/experiencesCtrl');

router.get('/', controller.all);
router.get('/top', controller.top5);
router.get('/detail/:id', controller.detail);

module.exports = router;
