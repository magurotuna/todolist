var express = require('express');
var router = express.Router();
var model = require('../model');
//var Task = model.Task;

var items = [
    {"task": "todo 1"},
    {"task": "<b>todoooooooooo</b>"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
    model.find({}, function(err, items) {
        console.log("items = " + items);
        res.render('index', { title: 'ToDo List', items: items });
    });
    //res.render('index', { title: 'ToDo List', items: items });
});

module.exports = router;
