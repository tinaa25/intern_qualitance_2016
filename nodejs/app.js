'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');

var Product = require('./models/product.model');
var Review = require('./models/review.model');


mongoose.connect('mongodb://localhost:27017/firstdatabase');

//create product
var newProduct = Product({
    name: 'Amazing product',
    price: '500',
    description: ' very good, useful product',
    picture: './images/products/product-1.jpg'
});

newProduct.save(function(err) {
    if (err) throw err;

    console.log('Product created ');
});

//get all products
// Product.find{}, function (err, products){
//   if (err) throw err;
//
//   console.log(products);
// });
//   //find one product

//find by Id
Product.findById('57a09c7b4b949674127f7b59', function(err, product) {
    if (err) throw err;

    console.log(product);
});

//create review
var newReview = Review({
    author: 'Tinaa',
    rating: 5
});

newReview.save(function(err) {
    if (err) throw err;

    console.log('Review created ');
});

//add review in product
Product.findById('57a09c7b4b949674127f7b59', function(err, product) {
    if (err) throw err;
    Review.findById('57a096e44274614211e89d7d', function(err, review) {
        if (err) throw err;
        product.reviews.push(review.id);
        product.save(function(err) {
            if (err) throw err;
        })
        console.log(review);

    });

    console.log(product);
});

//remove review
Product.findById('57a0a5195b093d15197e166e', function(err, product) {
    if (err) throw err;
product.remove(function(err){
  if (err) throw err;
  console.log('Product deleted!');
});
});


//create Review
//  var newReview = Review ({
//   name: "Ana",
//   text: "Amazing product"
// });
//
// newReview.save(function(err) {
//     if (err) throw err;
//
//     console.log('Review created ');
//
// });

app.get('/', function(req, res) {
    res.send('Hello, Node!');
});

app.listen(3001, function() {
    console.log('Ex app on port 3001');
});
