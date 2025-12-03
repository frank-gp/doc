crypto.randomUUID();

console.log(crypto.randomUUID());
console.log(Date.now() + '-' + Math.round(Math.random() * 1e9))
console.log(Date.now() + '-' + Math.round(Math.random() * 1e9))
console.log(Date.now() + '-' + Math.round(Math.random() * 100))
console.log(Date.now() + '-' + Math.round(Math.random() * 100))
console.log(Date.now())
console.log(Date.now())

// ========== generateUUID... ==========

function generateUUID() {
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  return uuid;
}

console.log(generateUUID());
// ========== generateUUID. ==========
