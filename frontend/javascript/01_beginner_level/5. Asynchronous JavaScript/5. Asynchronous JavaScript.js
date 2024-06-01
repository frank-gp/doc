// 1. Callbacks
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = "Fetched data";
      callback(null, data); // Simulating success
      // Uncomment the line below to simulate an error
      // callback("Error fetching data", null);
    }, 2000);
  }
  
  function processDataWithCallback(error, data) {
    if (error) {
      console.error("Callback Error:", error);
    } else {
      console.log("Callback Processing data:", data);
    }
  }
  
  fetchDataWithCallback(processDataWithCallback);
  
  // 2. Promises
  function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Fetched data";
        resolve(data); // Simulating success
        // Uncomment the line below to simulate an error
        // reject("Error fetching data");
      }, 2000);
    });
  }
  
  fetchDataWithPromise()
    .then(data => console.log("Promise Processing data:", data))
    .catch(error => console.error("Promise Error:", error));
  
  // 3. Async/Await
  async function fetchDataWithAsyncAwait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Fetched data";
        resolve(data); // Simulating success
        // Uncomment the line below to simulate an error
        // reject("Error fetching data");
      }, 2000);
    });
  }
  
  async function processDataWithAsyncAwait() {
    try {
      const data = await fetchDataWithAsyncAwait();
      console.log("Async/Await Processing data:", data);
    } catch (error) {
      console.error("Async/Await Error:", error);
    }
  }
  
  processDataWithAsyncAwait();
  