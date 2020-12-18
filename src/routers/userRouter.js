const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const loginValidation = require('../validations/loginValidation');
const registerValidation = require('../validations/registerValidation');

router.get('/login', userController.login);
router.post('/login', loginValidation, userController.enter);

router.get('/register', userController.register);
router.post('/register', registerValidation, userController.save);

router.get('/account/:userId', userController.account);
router.post('/account/:userId', userController.edit);

router.get('/logout', userController.logout);

module.exports = router;