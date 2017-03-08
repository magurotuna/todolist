var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var model = require('../model');
//var Task = model.Task;

/* post receiving */
router.post('/', function(req, res, next) {
    console.log("reqbody = " + req.body);
    id = req.body.id;
    //var task = new model();
    model.findById(id, function(err, task) {
        if(err) res.send(err);
        task.isDone = !task.isDone;
        task.save(function(err) {
            if(err) res.send(err);
            res.redirect('/');
        });
    });
});

module.exports = router;
