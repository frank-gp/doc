const formElement = document.querySelector("#saveTransaction");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let transactionDescription = document.getElementById("transactionDescription").value;
  let transactionPrice = document.getElementById("transactionPrice").value;
  let transaction = {
    transactionDescription,
    transactionPrice,
  };
  let transactionJSON = JSON.stringify(transaction);
  //   console.log(transactionJSON);

  fetch("http://localhost:3000/transactions", {
    method: "Post",
    body: transactionJSON,
  })
    .then((x) => x.json())
    .then(console.log);
});
