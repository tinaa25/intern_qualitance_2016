'use strict';

var express = require('express');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Product = require('./models/product.model');
var Review = require('./models/review.model');
var Specfication = require('./models/specification.model');


mongoose.connect('mongodb://localhost:27017/firstdatabase');
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



//create product
var newProduct = Product({
    name: 'Amazing product',
    price: '500',
    description: ' very good, useful product',
    picture: './images/products/product-1.jpg',
    onSale: true,
    pictures: [
        "../assets/images/products/product-1.jpg",
        "../assets/images/products/product-2.jpg",
        "../assets/images/products/product-3.jpg",
        "../assets/images/products/product-4.jpg",
        "../assets/images/products/product-5.jpg",
        "../assets/images/products/product-6.jpg"
    ],

});

newProduct.save(function(err) {
    if (err) throw err;

    console.log('Product created ');
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

//create specifications
var newSpecification = Specfication({
    label: "prop 1 1",
    value: "value 1 1"
});

newSpecification.save(function(err) {
    if (err) throw err;

    console.log('Specfication created ');
});


app.get('/product', function(req, res) {
    Product.find({}, function(err, products) {
        if (err) throw err;
        res.send(products);

    })
});
app.post('/product', function(req, res) {

    var newProduct = new Product(req.body);
    newProduct.save(function(err, createdProduct) {
        if (err) throw err;
        res.send(createdProduct);
        console.log('Product created ');
    });

});


app.listen(3001, function() {
    console.log('Ex app on port 3001');
});
app.put('/product/:id', function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) throw err;

        console.log('Product finded by ID ');
    })

});


app.delete('/product/:id', function(req, res) {
    Product.findById(req.params.id, function(err, deletedProduct) {
        if (err) throw err;
        console.log(product);
        product.remove(function(err) {
            if (err) throw err;
            console.log('Product deleted');
        })
        res.send(deletedProduct);
    });
});
