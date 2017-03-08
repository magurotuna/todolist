var express = require('express');
var router = express.Router();

var items = [
    {"task": "todo 1"},
    {"task": "<b>todoooooooooo</b>"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'ToDo List', items: items });
});

module.exports = router;
