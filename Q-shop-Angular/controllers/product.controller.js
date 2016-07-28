var qshop = angular.module("qshop").controller("ProductController", function($scope, $stateParams, ProductsRepository, Cart) {

    var fileName = "/data/data.json";
    $scope.quantity = 1;
    $scope.incrementQuantity = function() {
        $scope.quantity++;
    }
    $scope.decrementQuantity = function() {
        if ($scope.quantity > 1)
            $scope.quantity--;
    }

    $scope.loadProduct = function() {
        console.log("Load Product.", $stateParams);
        ProductsRepository.getProductList(fileName).then(function(result) {
            //succes
            var producId = $stateParams.id;
            var products = result.data;
            //var product;
            for (var i = 0; i < products.length; i++) {
                if (products[i].id == producId) {
                    $scope.product = products[i];
                    console.log('product', $scope.product);
                    break;
                }
            }
        }, function(err) {
            //error
            console.error(err);

        });
    };
    $scope.addToCart = function(){

      Cart.add($scope.product, $scope.quantity);
    };
});
