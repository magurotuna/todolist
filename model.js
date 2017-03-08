var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/todolist');

function validator(v) {
    return v.length > 0;
}

var Task = new mongoose.Schema({
    text: {type: String, validate: [validator, "Empty Error"]}
   ,created: {type: Date, delault: Date.now}
});

exports.Task = db.model('Task', Task);
