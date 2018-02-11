
const express = require('express');
const router = express.Router();

const calculatorModule = require('../modules/calculatorModule');
const storageModule = require('../modules/storageModule');
const rerunModule = require('../modules/rerunModule');
let total;

router.get('/', function(request, response) {
  calculatorModule.math(storageModule.history);
  response.send(storageModule.history);
});// end get router

router.post('/store', function(request, response){
  storageModule.add(request.body);
  response.sendStatus(200);
});//end post store router

router.post('/rerun', function(request, response){
  rerunModule.rerun(request.body);
  response.sendStatus(200);
});//end post rerun router

router.delete('/store', function(request, response){
  storageModule.delete(storageModule.history);
  response.send(storageModule.history);
})//end delete router

module.exports = router;
