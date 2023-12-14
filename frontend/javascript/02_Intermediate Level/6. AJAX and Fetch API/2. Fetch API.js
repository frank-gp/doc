// Fetch API
function fetchDataWithFetchAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Fetch API Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => console.log("Fetch API Data:", data))
      .catch(error => console.error(error.message));
  }
  
  fetchDataWithFetchAPI();
  