
const express = require('express');
const router = express.Router();

const calculatorModule = require('../modules/calculatorModule');
const storageModule = require('../modules/storageModule');

router.get('/', function(request, response) {
  let history = calculatorModule;
  console.log('calculatorRouter in router, output from module', history);
  response.sendStatus(200);
});// end get router

router.post('/store', function(request, response){
  let routerPostInput = request.body;
  console.log('inpostrouter', routerPostInput);
  storageModule.storageModule(routerPostInput);
  response.sendStatus(200);
})

module.exports = router;
