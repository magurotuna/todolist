var express = require('express');
var router = express.Router();
var model = require('../model');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/db');
mongoose.connect('mongodb://heroku_5kk5kw4b:g5nqivufg5ubrlkv72gps78hpe@ds125060.mlab.com:25060/heroku_5kk5kw4b')
//var Task = model.Task;

/* GET home page. */
router.get('/', function(req, res, next) {
    model.find({}, function(err, items) {
        console.log("items = " + items);
        res.render('index', { title: 'ToDo List', items: items });
    });
    //res.render('index', { title: 'ToDo List', items: items });
});

module.exports = router;
