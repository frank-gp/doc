const productsDemo = [
  { id: 1, name: "Product 1", category: "Category 1" },
  { id: 2, name: "Product 2", category: "Category 1" },
  { id: 3, name: "Product 3", category: "Category 2" },
];

const uniqueCategories = Array.from(new Set(productsDemo.map((product) => product.category))).map((name) => ({ name }));

console.log("uniqueCategories", uniqueCategories);
console.log(productsDemo.map((product) => ({name:product.category})));

const array2 = ["one", "two", "three", "one", "two"];
console.log(array2.map((item) => ({ item })));

const uniqueArray = Array.from(new Set(array2));
console.log(uniqueArray);
console.log(new Set(array2));
