const historyArray = require('./storageModule');

function rerun(index){
  historyArray.history.push(historyArray.history[index.index]);
  return historyArray.history;
}//end rerun function

module.exports = {rerun : rerun
};
