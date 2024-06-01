const express = require('express');
const app = express();

const data = [
  {
    url: 'google',
    redirect: 'https://google.com/',
    visits: 0,
  },
  {
    url: 'example',
    redirect: 'https://example.com/',
    visits: 0,
  },
];

app.get('/', (req, res) => {
  res.json(data);
});

app.get('/:url', (req, res) => {
  const requestedUrl = req.params.url;
  const redirectEntry = data.find((entry) => entry.url === requestedUrl);

  if (redirectEntry) {
    redirectEntry.visits++;
    res.redirect(redirectEntry.redirect);
  } else {
    res.status(404).json(data);
  }
});

app.listen(3000, () => {
    console.log(`Server is running http://localhost:3000/`);
  });