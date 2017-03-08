var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var model = require('../model');
//var Task = model.Task;

/* post receiving */
router.post('/', function(req, res, next) {
    console.log("reqbody = " + req.body);
    model.remove({
        _id: req.body.id
    }, function(err, user) {
        if(err) res.send(err);
        res.redirect('/');
    });
    //task.save(function(err) {
    //    mongoose.disconnect();
    //    if(err) {
    //        console.log(err);
    //        res.redirect('back');
    //    } else {
    //        res.redirect('/');
    //    }
    //});
    //res.json(req.body)
});

//router.get('/', function(req, res, next) {
  //res.send('aiueo');
//});

module.exports = router;
