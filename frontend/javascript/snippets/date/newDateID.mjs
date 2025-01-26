const nowDate = new Date();
const formattedDate =
  String(nowDate.getFullYear()).slice(-2) +
  String(nowDate.getMonth() + 1).padStart(2, "0") +
  String(nowDate.getDate()).padStart(2, "0") +
  //   "_" +
  String(nowDate.getHours()).padStart(2, "0") +
  String(nowDate.getMinutes()).padStart(2, "0") +
  String(nowDate.getSeconds()).padStart(2, "0");

const newDateID = Number(formattedDate);

console.log(newDateID);
console.log(
  new Date()
    .toISOString()
    .replace(/[:.\-TZ]/g, "")
    .slice(2, -3)
); //241101115748

export default newDateID;
