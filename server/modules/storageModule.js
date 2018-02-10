
let testArray = [];


function pushArray(input){
  console.log(input, 'input in storage module');
  testArray.push(input);
  console.log(testArray, 'testArray in storage module');
}

module.exports = {storageModule : pushArray};
