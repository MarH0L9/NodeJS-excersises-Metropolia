var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema({
    brand: {type: String, required: true, maxlength: 150},
    model: {type: String, required: true, maxlength: 200},
    color: {type: String, required: true, maxlength: 50},
    year: {type: Number, required: true},
});

//Export model
module.exports = mongoose.model('Car', CarSchema);