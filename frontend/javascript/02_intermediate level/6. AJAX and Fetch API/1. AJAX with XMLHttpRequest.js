// AJAX with XMLHttpRequest
function fetchDataWithAJAX() {
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
  }
  
  fetchDataWithAJAX();
  