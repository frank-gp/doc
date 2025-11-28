new Date().getTime(); //                                1747275957844
new Date(1711062205984); //                             2024-03-21T23:03:25.984Z
new Date(); //                                          2025-05-15T02:22:15.392Z
new Date("2025-05-13T15:39:39.035Z"); //                2025-05-13T15:39:39.035Z

new Date(item.expirationDate).toLocaleString("es-CO", { timeZone: "America/Bogota" }); //       15/5/2025, 7:00:00 p. m.
new Date(item.expirationDate).toLocaleDateString("es-CO", { timeZone: "America/Bogota" }); //   15/5/2025
new Date().toLocaleString("en-CA", { timeZone: "America/Lima" }); //                            2025-05-13, 11:06:56 a.m.
new Date().toLocaleString("en-CA"); //                                                          2025-05-13, 11:06:56 a.m.
new Date().toLocaleString("en-CA", { timeZone: "UTC" }); //                                     2025-05-13, 4:06:56 p.m.

new Date().toLocaleString(); //   5/12/2025, 4:35:11 AM
new Date().toUTCString(); //      Mon, 12 May 2025 09:35:11 GMT
new Date().toISOString(); //      2025-05-12T09:35:11.585Z

new Date().toISOString(); //                            2024-10-30T16:49:17.529Z
new Date().toISOString().slice(0, 10); //               2024-10-30
new Date().toISOString().split("T")[0]; //              2024-10-30
new Date().toISOString().split(":")[0]; //              2024-10-30T16
new Date().toISOString().replace(/:/g, "."); //         2024-10-30T16.49.17.536Z
new Date().toISOString().replace(/[:.]/g, "-"); //      2024-10-30T16-49-17-536Z
new Date().toISOString().replace(/[:.\-TZ]/g, ""); //   20241030165528027
new Date().toISOString().replace(/[^0-9]/g, ""); //     20241102013616943

new Date().toISOString().replace(/-/g, "").replace(/T/g, "-").slice(0, 14); //  20241201-14:50
const timestamp = new Date().toISOString().split(".")[0].replace(/[:.\-Z]/g, ""); // 20251125T221035063
export const timestampID = new Date()
  .toISOString()
  .split(".")[0]
  .replace(/[:.\-Z]/g, "")
  .slice(2); // 251125T222657

new Date()
  .toISOString()
  .replace(/[:.\-TZ]/g, "")
  .slice(2, -3); //241101120023

const backupFile = `mysql-${new Date()
  //
  .toISOString()
  .replace(/[:.Z]/g, "")
  .replace("T", "-")
  .slice(0, -3)}.sql`;

// console.log(backupFile);

// console.log(new Date().toISOString().replace(":", "-").replace(":", "-").replace(".", "-")); // 2024-10-30T16-49-17-536Z

const localTime = new Date().toLocaleTimeString();
// console.log(localTime); // Ejemplo de salida: "15:53:30"

const localDateTime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString();
// console.log(localDateTime); // Ejemplo de salida: "2024-10-30T16:49:17.529"
// console.log(Date.now());
// console.log(new Date().getTime());
// console.log(new Date().getTimezoneOffset() * 60000);
const fechaHoraLocal = new Date();
// console.log(fechaHoraLocal);
const fechaLocal = new Date().toLocaleDateString();
// console.log(fechaLocal);
const horaLocal = new Date().toLocaleString("es-PE", {});
// console.log(horaLocal);

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
