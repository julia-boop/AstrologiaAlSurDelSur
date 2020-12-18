const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('email')
    .isEmail().withMessage('Ingresa un email válido'),
    check('email')
    .not().isEmpty().withMessage('Ingresar un email'),
    check('password')
    .not().isEmpty().withMessage('Ingresar una contraseña')
]