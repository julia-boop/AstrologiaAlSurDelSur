const fs = require('fs');
const path = require('path');   

module.exports = {
    login: function(req, res){
        res.render('login')
    },
    register: function(req, res){
        res.render('register')
    },
    account: function(req, res){
        res.render('account')
    }
}