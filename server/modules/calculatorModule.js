const historyArray = require('./storageModule');
let total;

function doTheMath(array){
  let x = parseInt(array[array.length -1].x);
  let y = parseInt(array[array.length -1].y);
  let operator = array[array.length -1].operator;

  if(operator === '+'){
    total = x+y;
  }//end + if
    else if (operator === '-'){
      total = x-y;
    }//end - if
    else if (operator === '*'){
      total = x*y;
    }//end * if
    else if (operator === '/'){
      total = x/y;
    }//end / if
  console.log(total, 'total in doTheMath');

  array[array.length-1].total = total;

  return array;
}//end doTheMath function

module.exports = {math: doTheMath};
