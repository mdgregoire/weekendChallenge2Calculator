
const express = require('express');
const router = express.Router();

const calculatorModule = require('../modules/calculatorModule');
const storageModule = require('../modules/storageModule');
let total;

router.get('/', function(request, response) {
  total = calculatorModule.math(storageModule.history);
  console.log('calculatorRouter in router, output from calculatorModule', total);
  response.sendStatus(200);
});// end get router

router.post('/store', function(request, response){
  let routerPostInput = request.body;
  console.log('inpostrouter', routerPostInput);
  storageModule.add(routerPostInput);
  response.sendStatus(200);
})//end post router

module.exports = router;
