
var test = require('./mainTests.js');
var page  = new test();

describe('Simuwatt login', function () {

      beforeEach( function() {
        page.goToUrl('http://qa.simuwatt.com/#/login');
      });

      afterEach( function(){
        page.logout();
      });

      it ('positive login', function() {
        page.login('florentina.enciu', 'letmein');
        expect(page.verify_current_URL('http://qa.simuwatt.com/#/welcome?usrId=-J_BRPlBze05dG8rKdE8&orgId=-J_BMeqBxfSQa3uAe9jp')).toBe(true);
      });
    })
