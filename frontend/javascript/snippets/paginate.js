function paginateArray(array, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  return array.slice(startIndex, endIndex);
}

function getTotalPages(array, pageSize) {
  return Math.ceil(array.length / pageSize);
}

// Ejemplo de uso
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pageSize = 3;

const totalPages = getTotalPages(items, pageSize);
console.log(totalPages); // Output: 4

// Obtener los elementos de la página 2
const pageNumber = 2;
const page = paginateArray(items, pageSize, pageNumber);
console.log(page); // Output: [4, 5, 6]

// ==========  ==========

const num = 2.3;
const integerfloor = Math.floor(num);
console.log(integerfloor); // Output: 2

const integerceil = Math.ceil(num);
console.log(integerceil); // Output: 3

const integerround = Math.round(num);
console.log(integerround); // Output: 2

const integerparseInt = parseInt(num);
console.log(integerparseInt); // Output: 2

const integer = ~~num;
console.log(integer); // Output: 2
