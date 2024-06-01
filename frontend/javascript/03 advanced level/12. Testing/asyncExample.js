// asyncExample.js

function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data');
      }, 1000);
    });
  }
  
  module.exports = fetchData;
  