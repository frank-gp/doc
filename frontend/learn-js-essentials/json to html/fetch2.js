let file = "data.json";

fetch(file)
  .then((one) => one.json())
  .then((two) => console.log(two[1].product));

let one = async () => {
  let two = await fetch(file);
  let three = await two.json();
  console.log(three[1].product);
};
one();


