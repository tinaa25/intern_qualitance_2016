var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

//create a Schema

var productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String
    },
    picture: {
        type: String,
        default: " "
    },
    reviews: [{
        type: ObjectId,
        ref: " Review "
    }],
    created_at: Date,
    updated_at: Date


});

productSchema.methods.getFullPrice = function() {

    return "$" + this.price;
};

productSchema.pre('save', function(next) {
    //current Date
    var currentDate = new Date();

    this.updated_at = currentDate;

    if  (!this.created_at)
      {this.created_at = currentDate;
}

  next();
});


// create a model using the Schema

var Product = mongoose.model('Product', productSchema);

//
module.exports = Product;
