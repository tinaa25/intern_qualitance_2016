'use strict';

var express = require('express');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Product = require('./models/product.model');
var Review = require('./models/review.model');
var Specfication = require('./models/specification.model');


mongoose.connect('mongodb://localhost:27017/firstdatabase');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false
}));




//create product
// var newProduct = Product({
//     name: 'Amazing product',
//     price: '500',
//     description: ' very good, useful product',
//     picture: './images/products/product-1.jpg',
//     onSale: true,
//     pictures: [
//         "../assets/images/products/product-1.jpg",
//         "../assets/images/products/product-2.jpg",
//         "../assets/images/products/product-3.jpg",
//         "../assets/images/products/product-4.jpg",
//         "../assets/images/products/product-5.jpg",
//         "../assets/images/products/product-6.jpg"
//     ],
//
// });
//
// newProduct.save(function(err) {
//     if (err) throw err;
//
//     console.log('Product created ');
// });
//
//
// //create specifications
// var newSpecification = Specfication({
//     label: "prop 1 1",
//     value: "value 1 1"
// });
//
// newSpecification.save(function(err) {
//     if (err) throw err;
//
//     console.log('Specfication created ');
// });

//create product
app.post('/product', function(req, res) {

    var newProduct = new Product(req.body);
    newProduct.save(function(err, createdProduct) {
        if (err) throw err;
        res.send(createdProduct);
        console.log('Product created ');
    });

});

//get all products
app.get('/product', function(req, res) {
    Product.find({}, function(err, products) {
        if (err) throw err;
        res.send(products);
    })
});

//get single product
app.put('/product/:id', function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) throw err;

        console.log('Product finded by ID ' + product);
    })

});

//update product
app.put('/product/:id', function(req, res) {
    console.log('Updating product id');
    Product.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, function(err, updatedProduct) {
        if (err) throw err;
        res.send('Product updated ' + updatedProduct);
    });
});



//delete Product
// app.delete('/product/:id', function(req, res) {
//     Product.findById(req.params.id, function(err, deletedProduct) {
//         if (err) throw err;
//         console.log(product);
//         product.remove(function(err) {
//             if (err) throw err;
//             console.log('Product deleted');
//         })
//         res.send(deletedProduct);
//     });
// });

//review
app.post('/product/:id/reviews', function(req, res) {

            var id = req.params.id;
            var review = req.body;
            Review.create(review, function(err, reviewCreated) {
                if (err) throw err;
                console.log('My review' + reviewCreated);
                Product.findById(id, function(err, product) {
                    product.reviews.push(reviewCreated.id);
                    product.save(function(err, updatedProd) {

                        if (err) throw err;
                        console.log('My product' + updatedProd);

                        res.send(reviewCreated)
                    })
                })
            })

        }

        app.listen(3001, function() {
            console.log('Ex app on port 3001');
        });
