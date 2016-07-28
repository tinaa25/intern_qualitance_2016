 angular.module("qshop").factory("ProductsRepository", function($http){
    var repo = {};
    repo.getProductList = function(var1) {
        return $http.get(var1);
    }
    return repo;
});
