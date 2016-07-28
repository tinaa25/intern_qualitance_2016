angular.module("qshop").factory("Cart", function() {

    var cart = {};
    cart.products = [];
    cart.add = function(product, quantity) {
        var existaProdus = false;
        var index = 0;
        console.log("Am adaugat in cos", product);

        for (var i = 0; i < cart.products.length; i++) {
            if (parseInt(cart.products[i].id) === parseInt(product.id)) {
                existaProdus = true;
                index = i;
                break;
            }

        }
        if (existaProdus) {
          //  console.log("Deja exista produsul. " + product.name);
            cart.products[index].quantity += quantity;
        } else {
            console.log(" Am adaugat produsul ", product);
            product.quantity = quantity;
            cart.products.push(product);
        }
    };

    cart.getSubTotal = function() {
      var sum = 0;
      for (var i = 0; i < cart.products.length; i++) {
        sum += cart.products[i].price * cart.products[i].quantity;
      }
          return sum;
    };


    cart.getAllProducts = function() {
        return cart.products;

    };

    cart.getShipping = function() {
      return 50;

    };
    cart.getTotal = function() {
      return this.getSubTotal() + this.getShipping()

    };
    return cart;

});
