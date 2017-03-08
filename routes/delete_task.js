var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var model = require('../model');
//var Task = model.Task;

/* post receiving */
router.post('/', function(req, res, next) {
    //mongoose.connect('mongodb://localhost/db');
    console.log("reqbody = " + req.body);
    var task = new model();
    task.text = req.body.task;
    task.isDone = false;

    task.save(function(err) {
        mongoose.disconnect();
        if(err) {
            console.log(err);
            res.redirect('back');
        } else {
            res.redirect('/');
        }
    });
    //res.json(req.body)
    //res.redirect('/');
});

//router.get('/', function(req, res, next) {
  //res.send('aiueo');
//});

module.exports = router;
