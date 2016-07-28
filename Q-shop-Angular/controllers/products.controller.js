var qshop = angular.module("qshop").controller("ProductsController", function($scope, ProductsRepository, Cart){

var fileName = "/data/data.json";
  ProductsRepository.getProductList(fileName).then(function(result) {
      //succes
      console.log("Products", result.data);
      $scope.products = result.data;
  }, function(err) {
      //error
      console.error(err);

  });
  $scope.addToCart = function(product){

    Cart.add(product, 1);

  }
});
