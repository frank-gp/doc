const express = require("express");

const cors = require("cors");

const app = express();
const port = 3000;

let transactionArr = [];

//#region
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));
app.use(cors());
//#endregion

app.get("/transactions", (req, res) => {
  // res.send("me hicieron un get");
  res.send(JSON.stringify(transactionArr));
});

app.post("/transactions", (req, res) => {
  let transaction = req.body;
  transactionArr.push(transaction);
  // res.send(JSON.stringify("guardada bb"));
  res.send(JSON.stringify(transactionArr));
  console.log(transactionArr);
});

app.listen(port, () => {
  console.log("estoy ejecutandome en http://localhost:3000");
});
