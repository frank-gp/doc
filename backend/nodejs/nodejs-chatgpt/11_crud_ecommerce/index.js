const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', require('./routes/product'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
