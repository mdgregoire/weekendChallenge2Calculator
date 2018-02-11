const historyArray = require('./storageModule');

function rerun(index){
  //this is a silly line if code, the commented out section below has the same functionality but reads eaiser
  historyArray.history.push(historyArray.history[index.index]);
  // let theArray = historyArray.history;
  // let theIndex = index.index;
  // theArray.push(theArray[theIndex])
  return historyArray.history;
}//end rerun function

module.exports = {rerun : rerun
};
