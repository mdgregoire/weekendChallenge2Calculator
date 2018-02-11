const historyArray = require('./storageModule');



function rerun(index){
  console.log('inrerun');
  console.log(index.index, 'index in rerun');
  console.log(historyArray.history[index.index], 'history array at index');
  historyArray.history.push(historyArray.history[index.index]);
  console.log(historyArray, 'historyArray in storage module rerun function');
  return historyArray.history;
}



module.exports = {rerun : rerun
};
