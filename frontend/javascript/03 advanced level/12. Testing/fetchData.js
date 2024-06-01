// fetchData.js

import axios from 'axios';

async function fetchData() {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
}

export default fetchData;
