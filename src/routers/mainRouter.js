const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.home);
router.get('/presentation', mainController.presentation);
router.get('/technique', mainController.technique);
router.get('/investigation', mainController.investigation);

router.get('/talk', mainController.talk);
router.post('/message', mainController.message);

router.get('/detail/:articleID', mainController.detail);
router.get('/forecast', mainController.forecast);
router.delete('/delete/:articleID', mainController.delete);

router.get('/publish', mainController.publish);
router.post('/publish', mainController.post);


module.exports = router;