angular.module("qshop").factory("Contact", function($http, $state) {

    var contact = {};

    contact.sendMessage = function(contact) {

        console.log("Mesaj trimis", contact);

        $http.post("http://10.59.0.30:3000/posts", contact)

        $state.go('default');



    };

    return contact;

});
