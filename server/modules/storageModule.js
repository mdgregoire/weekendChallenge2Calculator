
let historyArray = [];


function pushToArray(input){
  historyArray.push(input);
  console.log(historyArray, 'historyArray in storage module');
}

module.exports = {add : pushToArray,
                  history : historyArray
                  };
