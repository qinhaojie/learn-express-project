var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var module1 = require('../db.js');

var module2 = require('../db2.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    module1.find({},function(e,a){
        if(e){
            res.end('eeeee');
        }else{
            var result='';

            for(var i=0;i< a.length;i++){
                result += a[i].a()+'\n';
            }
            res.end(result);
        }

    })

});
router.get('/u/:user',function(req,res,next){
    module2.find({},function(e,a){
        if(e){
            res.end('eeeee');
        }else{
            var result='';
            console.log (a[0].__proto__)
            for(var i=0;i< a.length;i++){
                result += a[i].a()+'\n';
            }
            res.end(result);
        }

    })

});
router.post('/post', function(req, res, next) {
    res.render('index', { title: req.params.username + req.query.s});
});

router.get('/reg', function(req, res, next) {
    res.render('index', { title: req.params.username + req.query.s});
});


router.post('/reg', function(req, res, next) {
    res.render('index', { title: req.params.username + req.query.s});
});

router.get('/login', function(req, res, next) {
    res.render('index', { title: req.params.username + req.query.s});
});

router.get('/logout', function(req, res, next) {
    res.render('index', { title: req.params.username + req.query.s});
});
module.exports = router;
