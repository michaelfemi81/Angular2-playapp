
describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'ChangeList/Build';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
/** var name = element(by.binding('fcovered'));
var toast = element(by.css('toast'));
//and later use it like 
browser.wait(toast.isPresent);
console.log(name.getText());\

 browser.wait(function() {
return element(by.css('tile')).isPresent();
}, 10000); element(by.css('tile')).click();
**/
//var h2=element(by.css('[(click)="Hide()"]')); 
//h2.click();
browser.waitForAngular(); 
var h4=element(by.css('h4'))
expect(element(by.css('h4')).getText()).toEqual(expectedMsg);


//console.log(each.getText());
 //browser.takeScreenshot();
 
//expect(element(by.css('toast')).getText()).toEqual("Cannot View Operation is Still Pending")
   // expect(element(by.css('h4')).getText()).toEqual(expectedMsg);
  
   
  });
  it('it should get a toast message after clicking on a pending tile' , function () {

browser.wait(function() {
  
return element(by.css('tile')).isPresent();
}, 5000);
var tt=element.all(by.css('tile')).get(0);
tt.click();

var elm =  browser.driver.findElement(by.id('toast-container'));
  browser.wait(function() {
  
return elm.isDisplayed()
}, 5000);

elm.getText().then(function(tt){
  console.log(tt)
})

expect(elm.getText()).toEqual("Cannot View Operation is Still Pending");
  })

   it('it should get a toast message after clicking on a runnning tile ' , function () {

browser.wait(function() {
  
return element(by.css('tile')).isPresent();
}, 5000);
var tt=element.all(by.css('tile')).get(1);
tt.click();

var elm =  browser.driver.findElement(by.id('toast-container'));
  browser.wait(function() {
  
return elm.isDisplayed()
}, 5000);

elm.getText().then(function(tt){
  console.log(tt)
})

expect(elm.getText()).toEqual("Cannot View Operation is Still Running");
  })
  it('should click on a fsailed tile and the bring up the metric modal ', function () {
browser.wait(function() {
  
return element(by.css('tile')).isPresent();
}, 5000);
var tt=element.all(by.css('tile')).get(4);

tt.click();
 //let toast = element(by.id('toast-container'));
 browser.wait(function() {
  
return element(by.css('feature')).isPresent();
}, 5000);
 var each=element(by.css('feature'));
 each.click();

var elm = element(by.className('modal'));
  browser.wait(function() {
  
return elm.isPresent();
}, 5000);

  })
  it('should click on a complete tile and the bring up the build modal  ', function () {
browser.wait(function() {
  
return element(by.css('tile')).isPresent();
}, 5000);
var tt=element.all(by.css('tile')).get(3);

tt.click();
 //let toast = element(by.id('toast-container'));
 browser.wait(function() {
  
return element(by.css('build')).isPresent();
}, 5000);
 var each=element(by.css('build'));
 
 each.click();

var elm = element(by.className('modal'));
  browser.wait(function() {
  
return elm.isPresent();
}, 5000);

  })
   it('should click on an accepeted tile and check for some Texts', function () {
browser.wait(function() {
  
return element(by.css('tile')).isPresent();
}, 5000);
var tt=element.all(by.css('tile')).get(5);

tt.click();
 //let toast = element(by.id('toast-container'));
 browser.wait(function() {
  
return tt.element(by.css('span')).isPresent();
}, 5000);


expect(tt.all(by.css('span')).get(0).getText()).toEqual("Metric");
expect(tt.all(by.css('span')).get(1).getText()).toEqual("64");
expect(tt.all(by.css('span')).get(5).getText()).toEqual("Build");
expect(tt.all(by.css('span')).get(7).getText()).toEqual("Functional Test");
expect(tt.all(by.css('span')).get(6).getText()).toEqual("Unit Test");
tt.all(by.css('span')).get(6).getText().then(function(text){
//console.log(text);

})
 

 //each.click();



  })
 

   it('should click on a failed tile and the cant see the test modal cause did not run ', function () {
browser.wait(function() {
  
return element(by.css('tile')).isPresent();
}, 5000);
var tt=element.all(by.css('tile')).get(6);

tt.click();
 //let toast = element(by.id('toast-container'));
 browser.wait(function() {
  
return element(by.cssContainingText('h3','Test Did not run')).isPresent();
}, 5000);
expect(element(by.cssContainingText('h3','Test Did not run')).getText()).toEqual('Test Did not run');


  })
});
