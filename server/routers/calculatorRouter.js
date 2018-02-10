
const express = require('express');
const router = express.Router();

const calculatorModule = require('../modules/calculatorModule');

router.get('/', function(request, response) {
  let history = calculatorModule;
  console.log('calculatorRouter in router, output from module', history);
  response.sendStatus(200);
});

module.exports = router;
