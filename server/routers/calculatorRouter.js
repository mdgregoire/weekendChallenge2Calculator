
const express = require('express');
const router = express.Router();

const calculatorModule = require('../modules/calculatorModule');
const storageModule = require('../modules/storageModule');
let total;

router.get('/', function(request, response) {
  total = calculatorModule.math(storageModule.history);
  response.send(storageModule.history);
});// end get router

router.post('/store', function(request, response){
  let routerPostInput = request.body;
  storageModule.add(routerPostInput);
  response.sendStatus(200);
})//end post router

module.exports = router;
