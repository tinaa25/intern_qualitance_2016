'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//review Schema
var reviewSchema = new Schema ({
 author: String,
 comment: String,
 rating: {type:Number, required: true, min:1, max: 5},

});


var Review = mongoose.model('Review', reviewSchema);


module.exports = Review;
