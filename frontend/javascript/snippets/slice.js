let users = ["a", "b", "c", "d", "e", "f","g"];
const page = 3
const limit = 2

const startIndex = (page - 1) * limit // 2 * 2 = 4
const endIndex = page * limit        // 3 * 2 = 6
const users2 = users.slice(startIndex, endIndex)
console.log(users2)

// const index = users.findIndex((u) => u.name === "Jane");
// if (index === -1) {
// const userDeletes = users.splice(2, 4);
// const userDeletesSlice = users.slice(1, 3);
// console.log(userDeletes);
// console.log(userDeletesSlice);
// console.log(users);

// } else {
//   console.log(index);
// }
