require('dotenv').config();

const fs = require('fs');
const path = require('path');   
const db = require('../database/models');
const nodemailer = require('nodemailer');


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
        let investigationArticles = [];

        db.Article.findAll({
            where: {
                category_id: 2
            }
        })
        .then(function(allArticles){
            for(let i = 0 ; i < allArticles.length ; i++){
                if(allArticles[i].category_id == 2){
                    investigationArticles.push(allArticles[i])
                }
            }
            return res.render('investigation', {investigationArticles:investigationArticles})
        })
        .catch(function(e){
            res.send(e)
        })
    },
    talk: function(req, res){
        res.render('talk')
    },
    message: async function(req, res){
        let transporter = await nodemailer.createTransport({
            host: "plesk.ar.conectemos.com",
            port: 465,
            secure: true,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS
            }
        });
        let mailOptions = {
            from: req.body.email,
            to: process.env.MAIL_USER,
            subject: req.body.title,
            text: (req.body.message != null || req.body.message != '') ? `${req.body.name} ${req.body.last_name} envio el siguiente mensaje => ${req.body.message}` : 'El usuario no adjunto ningun comentario'
        };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        }); 

        return res.render('talk')
    },
    detail: function(req, res){

        db.Article.findOne({
            where:{
                id: req.params.articleID
            }
        })
        .then(function(article){
            return res.render('detail', {article:article})
        })
        .catch(function(e){
            return res.send(e)
        })
    },
    forecast: function(req, res){
        let forecastArticles = [];

        db.Article.findAll({
            where: {
                category_id: 1
            }
        })
        .then(function(allArticles){
            for(let i = 0 ; i < allArticles.length ; i++){
                if(allArticles[i].category_id == 1){
                    forecastArticles.push(allArticles[i])
                }
            }
            return res.render('forecast', {forecastArticles:forecastArticles})
        })
        .catch(function(e){
            res.send(e)
        })
    },
    publish: function(req, res){
        res.render('publish')
    },
    post: function(req, res){
        let newArticle = {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            category_id: Number(req.body.category),
            body: req.body.text
        }

        db.Article.create(newArticle)
        .then(result => {
            if(result.category_id == 1){
                return res.redirect('/forecast');
            } else {
                return res.redirect('/investigation');
            }
            
        })
        .catch(e => {
            return res.send(e);
        })
    },
    delete: function(req, res){
        db.Article.destroy({
            where: {
                id: req.params.articleID
            }
        })
        .then(function(result){
            res.redirect('/')
        })
    }
}