const fs = require('fs');
const path = require('path');   
const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const {check, validationResult, body} = require('express-validator');

module.exports = {
    login: function(req, res){
        res.render('login')
    },
    enter: function(req, res){
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(result){
            if(bcryptjs.compareSync(req.body.password, result.password)){
                req.session.userSession = result.id
                return res.redirect('/')
            }else{
                return res.render('login')
            }
        })
        .catch(function(e){
            return res.send(e)
        })
    },
    register: function(req, res){
        res.render('register')
    },
    save: function(req, res){
        let newUser = {
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 12),
            role:1
        }

        db.User.create(newUser)
        .then(function(result){
            req.session.userSession = result.id
            return res.redirect('/');
        })
        .catch(function(e){
            res.send(e)
        })
    },
    account: function(req, res){
        db.User.findOne({
            where:{
                id: req.session.userSession
            }
        })
        .then(function(userLogged){
            return res.render('account', {userLogged:userLogged})
        })
        .catch(function(e){
            res.send(e)
        })
    },
    edit: function(req, res){
        db.User.update({
            name: req.body.name,
            last_name:req.body.last_name,
            email: req.body.email
        } , {
            where : {
                id: req.session.userSession
            }
        })
        .then(function(userLogged){
            return res.redirect('/user/account/'+ userLogged.id)
        })
        .catch(function(e){
            res.send(e)
        })
    },
    logout: function(req, res){
        req.session.destroy();
        res.redirect('/')
    }
}