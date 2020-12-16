const fs = require('fs');
const path = require('path');   

module.exports = {
    home: function(req, res){
        res.render('home')
    },
    presentation: function(req, res){
        res.render('presentation')
    },
    technique: function(req, res){
        res.render('technique')
    },
    investigation: function(req, res){
        res.render('investigation')
    },
    talk: function(req, res){
        res.render('talk')
    },
    detail: function(req, res){
        res.render('detail')
    },
    forecast: function(req, res){
        res.render('forecast')
    },
    publish: function(req, res){
        res.render('publish')
    }
}