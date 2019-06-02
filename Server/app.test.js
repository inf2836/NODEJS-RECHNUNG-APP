
var express = require('express');
var app = express();


test('should test if the route exist',() =>{

  let result = app.get('/sign_up');
   expect(result).not.toBe(null);

})
test('should test if the route exist',() =>{

  let result1 = app.get('/sign_in');
   expect(result1).not.toBe(null);

})
test('should test if the route exist',() =>{

  let result2 = app.get('/sign_out');
   expect(result2).not.toBe(null);

})
test('should test if the route exist',() =>{

  let result3 = app.get('/admin');
   expect(result3).not.toBe(null);

})
test('should test if the route exist',() =>{

  let result4 = app.get('/home');
   expect(result4).not.toBe(null);

})
test('should test if the route exist',() =>{

  let result5 = app.get('/transactions');
   expect(result5).not.toBe(null);

})
test('should test if the route exist',() =>{

  let result6 = app.post('/transactions');
   expect(result6).not.toBe(null);

})
