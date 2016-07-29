angular.module('qshop').controller('ContactController', function($scope, Contact) {


    $scope.sendMessage = function() {

        var contact = {
            email: "",
            subject: "",
            message: ""

        };
        contact.email = $scope.email;
        contact.subject = $scope.subject;
        contact.message = $scope.message;

        Contact.sendMessage(contact);
    };

});
