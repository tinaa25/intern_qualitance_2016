angular.module('qshop').controller('CartController', function($scope, Cart ) {
  $scope.cartList = Cart.getAllProducts ();

  updateCart();

  $scope.incrementQuantity = function (cartItem) {
    cartItem.quantity += 1;
        updateCart();
  };
  $scope.decrementQuantity = function (cartItem) {

    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      updateCart();
    }
  };

function updateCart() {
  $scope.subTotal = Cart.getSubTotal();
  $scope.total = Cart.getTotal();
  $scope.shipping = Cart.getShipping();
}
});
