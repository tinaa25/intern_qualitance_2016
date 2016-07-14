//definim functiile din specs si apelam functiile din utils.js

 var data = require  ('./data.js');
 var Utility= require ('./utils.js');

 var test = function() {

   this.login = function (username, password){
     username = username || 'test';
     password = password || 'password'

     var usr= Utility.findElementViaObject(data.username);
     usr.sendKeys(username);
     var psw= Utility.findElementViaObject(data.password);
     psw.sendKeys(password);
     var logButton= Utility.findElementViaObject(data.login);
     logButton.click();
   };

       this.goToUrl = function (url) {
      browser.get(url);
    };


    this.logout = function (){
      Utility.findElementViaObject(data.userIcon).click();
      var logoutbutton = Utility.findElementViaObject(data.logout);
      logoutbutton.click();

      };

      this.verify_current_URL = function(url) {
        return browser.wait(function() {
          return Utility.checkUrl(url);
        },10*1000);
      };
    }


      module.exports =test;
