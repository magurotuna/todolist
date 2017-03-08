var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var db = mongoose.connect('mongodb://localhost/todolist');

function validator(v) {
    return v.length > 0;
}

var Task = new Schema({
    text: {type: String, required: true /*validate: [validator, "Empty Error"]*/}
   ,created: {type: Date, delault: Date.now}
   ,isDone: Boolean
});

module.exports = mongoose.model('Task', Task);
