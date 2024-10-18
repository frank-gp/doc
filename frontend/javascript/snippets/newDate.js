console.log(new Date().toISOString()); // 2024-10-30T16:49:17.529Z
console.log(new Date().toISOString().slice(0, 10)); // 2024-10-30
console.log(new Date().toISOString().split("T")[0]); // 2024-10-30
console.log(new Date().toISOString().split(":")[0]); // 2024-10-30T16
console.log(new Date().toISOString().replace(/:/g, ".")); // 2024-10-30T16.49.17.536Z
console.log(new Date().toISOString().replace(/[:.]/g, "-")); // 2024-10-30T16-49-17-536Z
console.log(new Date().toISOString().replace(/[:.\-TZ]/g, "")); //20241030165528027
const uniqueSuffix2 = new Date().toISOString().replace(/[^0-9]/g, ""); //20241102013616943
console.log("uniqueSuffix2: ", uniqueSuffix2);
console.log(
  new Date()
    .toISOString()
    .replace(/[:.\-TZ]/g, "")
    .slice(2, -3)
); //241101120023

console.log(new Date().toISOString().replace(":", "-").replace(":", "-").replace(".", "-")); // 2024-10-30T16-49-17-536Z

const localTime = new Date().toLocaleTimeString();
console.log(localTime); // Ejemplo de salida: "15:53:30"

const localDateTime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString();
console.log(localDateTime); // Ejemplo de salida: "2024-10-30T16:49:17.529"
console.log(Date.now());
console.log(new Date().getTime());
console.log(new Date().getTimezoneOffset() * 60000);
const fechaHoraLocal = new Date();
console.log(fechaHoraLocal);
const fechaLocal = new Date().toLocaleDateString();
console.log(fechaLocal);
const horaLocal = new Date().toLocaleString("es-PE", {});
console.log(horaLocal);

const fechaCompleta = new Date().toLocaleString("es-PE", {
  year: "numeric",
  month: "long",
  day: "2-digit",
  weekday: "long",
});
// Ejemplo de salida: "viernes, 01 de noviembre de 2024"

const horaCompleta = new Date().toLocaleString("es-PE", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZoneName: "long",
  timeZone: "America/Lima",
});
// Ejemplo de salida: "09:23:00 a. m., Hora estándar de Perú"
