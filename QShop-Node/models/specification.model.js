'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//specification  Schema
var specificationSchema = new Schema ({
 label: String,
 value: String
});


var Specfication = mongoose.model('Specfication', specificationSchema);

module.exports = Specfication;
