
let list = [1,2,3,4,5]

for (element of list) {
    console.log(element)
}

list.forEach(element => {
    console.log(element)
});

list.forEach((element, index) => {
    console.log(element)
    console.log(index)
});

