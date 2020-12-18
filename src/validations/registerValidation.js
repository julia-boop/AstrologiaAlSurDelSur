const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .not().isEmpty().withMessage('Ingresa un nombre'),
    check('last_name')
    .not().isEmpty().withMessage('Ingresa un apellido'),
    check('email')
    .isEmail().withMessage('Ingresa un email válido'),
    check('password')
    .isLength({min: 8, max: 16}).withMessage('La constraseña debe contener al menos 8 caracteres.'),
    body('email')
        .custom(async function(enteredEmail){
            let validEmail = await db.User.findOne({
                where: {
                    email: enteredEmail
                }
            })
            .then(function(result){
                if(result){
                    throw Error('Este mail ya está registrado');
                }else{
                    return true;
                }
            })
            return validEmail;
        }).withMessage('Este email ya esta registrado')
]