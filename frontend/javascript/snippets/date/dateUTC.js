// Crear una fecha en la zona horaria local
const localDateCurrent = new Date(new Date().toLocaleString());

console.log("localDate.toStri:", localDateCurrent.toString());
console.log("localDate.toLoca:", localDateCurrent.toLocaleString());
console.log("localDateCurrent:", localDateCurrent);
console.log("____");

const getLocalISOString = (date) => {
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);
  return localDate.toISOString();
};

const now = new Date();
const localISOString = getLocalISOString(now);

const newDate = new Date();
const newDateCustom = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000).toISOString();

console.log("localISOString___", localISOString);
console.log("newDateCustom____", newDateCustom);
