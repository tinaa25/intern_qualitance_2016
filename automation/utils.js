//ia locatorii din data.js si il interpreteaza automat

var findElement = function(locator, type){
    switch (type) {
      case 'css':
          return element(by.css(locator));
      break;
      case 'xpath':
          return element(by.xpath(locator));
      break;
      case 'model':
          return element(by.model(locator));
      break;
      case 'binding':
          return element(by.binding(locator));
      break;
      case 'repeater':
          return element(by.repeater(locator));
      break;



      default: throw new Error('Error.The locator type doesn t exist. ');

    }

}

  var findElementViaObject= function (obj) {
  return findElement(obj.locator, obj.type)

}

var checkUrl = function (url) {
  return browser.getCurrentUrl().then(function(actualUrl) {
    return url == actualUrl;

  })

};



module.exports= {
  findElementViaObject: findElementViaObject,
  findElement: findElement,
  checkUrl: checkUrl

};
