// Combined Example (AJAX and Fetch API)
function fetchData() {
    // AJAX with XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log("AJAX Data:", data);
        } else {
          console.error("AJAX Error:", xhr.statusText);
        }
      }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.send();
  
    // Fetch API
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
  
  fetchData();
  