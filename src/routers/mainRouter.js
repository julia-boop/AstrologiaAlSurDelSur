const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.home);
router.get('/presentation', mainController.presentation);
router.get('/technique', mainController.technique);
router.get('/investigation', mainController.investigation);
router.get('/talk', mainController.talk)

module.exports = router;