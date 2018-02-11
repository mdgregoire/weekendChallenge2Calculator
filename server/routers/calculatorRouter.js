
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
  let routerPostInput = request.body;
  storageModule.add(routerPostInput);
  response.sendStatus(200);
});//end post store router

router.post('/rerun', function(request, response){
  let routerPostRerun = request.body;
  rerunModule.rerun(routerPostRerun);
  response.sendStatus(200);
});//end rerun router

module.exports = router;
