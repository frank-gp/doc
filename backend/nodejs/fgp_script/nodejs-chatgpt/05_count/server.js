const express = require('express');
const app = express();
const port = 3000;

let refreshCount = 0;

// Reset the count 
const resetInterval = 60000 * 5;

app.get('/', (req, res) => {
  refreshCount++;
  
  if (refreshCount > 2) {
    // Redirect to domain.com when count exceeds 2
    return res.redirect('http://example.com');
  }

  res.send(`Page Refresh Count: ${refreshCount}`);
});

// Function to reset the count
function resetCount() {
  refreshCount = 0;
  console.log('Page refresh count has been reset.');
}

// Set an interval to reset the count every 5 minutes
setInterval(resetCount, resetInterval);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
