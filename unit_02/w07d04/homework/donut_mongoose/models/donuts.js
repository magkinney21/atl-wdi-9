//requirements: require mongoose
var Schema = require("../db/schema");
var mongoose = require('mongoose');
var Donuts = Schema.Donuts;
//create your donut schema:

var donutSchema = new Schema({
{
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
}

});

//export your donut with module.exports()
module.exports = Donuts;



