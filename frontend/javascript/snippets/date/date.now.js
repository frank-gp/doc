new Date(1711062205984);

let newDate_getTime_ = new Date().getTime();
// console.log(newDate_getTime_);
//1687200961827

// Get the current timestamp
const timestamp = Date.now();

// Convert timestamp to Date object
const newDate = new Date(1711062205984);

// Get the day, month, year, hour, and minute
const day = String(newDate.getDate()).padStart(2, "0"); // Ensures two digits with leading zero
const month = String(newDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because getMonth() returns 0-indexed month
const year = newDate.getFullYear();
const hour = String(newDate.getHours()).padStart(2, "0"); // Ensures two digits with leading zero
const minute = String(newDate.getMinutes()).padStart(2, "0"); // Ensures two digits with leading zero

// Format the date as "MM/DD/YYYY HH:MM" (hour and minute in 24-hour format)
const formattedDate = `${year}/${month}/${day} ${hour}:${minute}`;

// console.log(formattedDate); // Output: 03/21/2024 13:05 (for today's date and current time)

// ==========  ==========
// Get the current UTC time
let utcTime = new Date();
// console.log(utcTime);

// Convert UTC time to Lima, Peru time by adding 5 hours
utcTime.setHours(utcTime.getHours() - 5);

// Log the Lima, Peru time
// console.log(utcTime);

// ==========  ==========
// Specify the target time zone (Lima, Peru)
const timeZone = "America/Lima";

// Get current date and time in the specified time zone
const formattedDate2 = new Intl.DateTimeFormat("en-US", {
  timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
}).format(new Date());

// Log the formatted date and time
// console.log(formattedDate2);

// ==========  ==========
// Get the current date
let currentDate = new Date();

// Get the time zone offset in minutes
let timeZoneOffset = currentDate.getTimezoneOffset();
// console.log(timeZoneOffset)

// Convert the time zone offset to hours and minutes
let hours = Math.floor(Math.abs(timeZoneOffset) / 60);
let minutes = Math.abs(timeZoneOffset) % 60;

// Determine if it's positive or negative offset
let sign = timeZoneOffset > 0 ? "-" : "+";

// Construct the time zone string
let timeZoneString = "UTC" + sign + hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");

// Log the current time zone
// console.log("Current Time Zone: " + timeZoneString);

// ==========  ==========
// Get the current date in UTC
let currentUTC = new Date().toUTCString();

// Get the current date in local time
let currentLocal = new Date().toString();

// Log both UTC and local time
// console.log("UTC Time: ", currentUTC);
// console.log("Local Time: ", currentLocal);

// ==========  ==========
// Obtener la fecha y hora actual en la zona horaria local
let currentDate3 = new Date();

// Establecer la fecha y hora de la reunión en la zona horaria local (Lima, Perú)
let meetingTimeLocal = new Date(currentDate3.getFullYear(), currentDate3.getMonth(), currentDate3.getDate(), 20, 0, 0);

// Establecer la fecha y hora de la reunión en UTC
let meetingTimeUTC = new Date(meetingTimeLocal.getTime() - meetingTimeLocal.getTimezoneOffset() * 60000);

// Calcular la diferencia de tiempo hasta la reunión en horas y minutos
let timeDifferenceHours = Math.floor((meetingTimeLocal - currentDate3) / (1000 * 60 * 60));
let timeDifferenceMinutes = Math.floor((meetingTimeLocal - currentDate3) / (1000 * 60)) % 60;

// Formatear la diferencia de tiempo para la salida
let timeDifferenceString = `${timeDifferenceHours} horas y ${timeDifferenceMinutes} minutos`;

// Imprimir el tiempo restante tanto en la zona horaria local como en UTC
// console.log(`Tiempo restante para la reunión en la zona horaria local (Lima, Perú): ${timeDifferenceString}`);
// console.log(`Tiempo restante para la reunión en UTC: ${timeDifferenceString}`);

// ==========  ==========
// Obtener la fecha y hora actual en la zona horaria de Lima, Perú
let currentDate5 = new Date();

// Establecer la hora de la reunión en la zona horaria de Lima, Perú
let meetingTimeLocal5 = new Date(currentDate5.getFullYear(), currentDate5.getMonth(), currentDate5.getDate(), 20, 0, 0);

// Especificar la zona horaria deseada (ejemplo: Madrid, España)
let timeZone5 = "Europe/Madrid"; // puedes utilizar cualquier otra zona horaria

// Convertir la hora de la reunión a la zona horaria especificada
let meetingTimeOtherZone = meetingTimeLocal5.toLocaleString("en-US", { timeZone5: timeZone });

// Imprimir la hora de la reunión en la zona horaria especificada
// console.log(`Hora de la reunión en ${timeZone}: ${meetingTimeOtherZone}`);

// ==========  ==========
// Hora de la reunión en Lima, Perú (20:00 horas)
let horaReunionPeru1 = 20;

// Obtener la fecha y hora actual en la zona horaria local
let fechaActual1 = new Date();

// Calcular la hora de la reunión en UTC sumando el desfase horario de Lima (UTC-5)
let horaReunionUTC1 = horaReunionPeru1 + 5; // Sumando 5 horas para convertir de UTC-5 a UTC

// Ajustar si la hora en UTC supera las 24 horas
if (horaReunionUTC1 >= 24) {
  horaReunionUTC1 -= 24;
}

// Imprimir la hora de la reunión en UTC
// console.log(`La reunión será a las ${horaReunionUTC1}:00 horas en UTC.`);

// ==========  ==========
// Hora de la reunión en Lima, Perú (20:00 horas)
let horaReunionPeru = 20;

// Obtener la fecha y hora actual en la zona horaria local
let fechaActual = new Date();

// Obtener la hora actual en formato UTC
let horaActualUTC = fechaActual.toISOString();

// Calcular la hora de la reunión en UTC sumando el desfase horario de Lima (UTC-5)
let horaReunionUTC = horaReunionPeru + 5; // Sumando 5 horas para convertir de UTC-5 a UTC

// Ajustar si la hora en UTC supera las 24 horas
if (horaReunionUTC >= 24) {
  horaReunionUTC -= 24;
}

// Imprimir la hora actual en formato UTC
// console.log(`Hora actual en UTC: ${horaActualUTC}`);

// Imprimir la hora de la reunión en UTC
// console.log(`La reunión será a las ${horaReunionUTC}:00 horas en UTC.`);

// ==========  ==========
// Hora de la reunión en Lima, Perú (20:00 horas)
let horaReunionPeru2 = 20;

// Obtener la fecha y hora actual en la zona horaria local
let fechaActual2 = new Date();

// Calcular la hora de la reunión en UTC sumando el desfase horario de Lima (UTC-5)
let horaReunionUTC2 = horaReunionPeru2 + 5; // Sumando 5 horas para convertir de UTC-5 a UTC

// Ajustar si la hora en UTC supera las 24 horas
if (horaReunionUTC2 >= 24) {
  horaReunionUTC2 -= 24;
}

// Obtener la hora de la reunión en la zona horaria local
let horaReunionLocal = new Date(
  fechaActual2.getFullYear(),
  fechaActual.getMonth(),
  fechaActual.getDate(),
  horaReunionPeru2,
  0,
  0
);

// Imprimir la hora de la reunión en UTC
// console.log(`La reunión será a las ${horaReunionUTC2}:00 horas en UTC.`);

// Imprimir la hora de la reunión en la zona horaria local
// console.log(`La reunión será a las ${horaReunionLocal.toLocaleString()} en la zona horaria local.`);

// ==========  ==========
// Hora de la reunión en Lima, Perú (20:00 horas)
let horaReunionPeru3 = 20;

// Obtener la fecha y hora actual en la zona horaria local
let fechaActual3 = new Date();

// Calcular la hora de la reunión en UTC sumando el desfase horario de Lima (UTC-5)
let horaReunionUTC3 = horaReunionPeru3 + 5; // Sumando 5 horas para convertir de UTC-5 a UTC

// Ajustar si la hora en UTC supera las 24 horas
if (horaReunionUTC3 >= 24) {
  horaReunionUTC3 -= 24;
}

// Obtener la hora de la reunión en la zona horaria local
let horaReunionLocal3 = new Date(
  fechaActual3.getFullYear(),
  fechaActual3.getMonth(),
  fechaActual3.getDate(),
  horaReunionPeru3,
  0,
  0
);

// Imprimir la hora de la reunión en UTC
// console.log(`Log 1: La reunión será el ${fechaActual3.toLocaleDateString()} a las ${horaReunionUTC3}:00 horas en UTC.`);

// Imprimir la hora de la reunión en la zona horaria local
// console.log(`Log 2: La reunión será el ${fechaActual3.toLocaleDateString()} a las ${horaReunionLocal3.toLocaleString()} en la zona horaria local.`);

// ==========  ==========
// Obtener la fecha y hora actual en UTC
const fechaHoraActualUTC = new Date().toUTCString();

// Crear un objeto de fecha para Perú (UTC-5)
const fechaHoraActualPeru = new Date();
fechaHoraActualPeru.setUTCHours(fechaHoraActualPeru.getUTCHours() - 5);

// Crear un objeto de fecha para España (UTC+2)
const fechaHoraActualEspana = new Date();
fechaHoraActualEspana.setUTCHours(fechaHoraActualEspana.getUTCHours() + 2);

// Definir la hora de la reunión (20 horas)
const horaReunion = new Date();
horaReunion.setUTCHours(3);

// Formatear fecha y hora en una cadena legible
const formatoFechaHora = (fechaHora) => {
  return fechaHora.toLocaleString("es-PE", {
    timeZone: "America/Lima",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

// Mostrar fecha y hora en cada zona horaria, incluyendo la hora de la reunión
console.log("Fecha y hora actual en UTC:", fechaHoraActualUTC);
console.log("Fecha y hora actual en Perú:", formatoFechaHora(fechaHoraActualPeru));
console.log("Fecha y hora actual en España:", formatoFechaHora(fechaHoraActualEspana));
console.log("Hora de la reunión en UTC:", horaReunion.toUTCString());
console.log("Hora de la reunión en Perú:", formatoFechaHora(horaReunion));
horaReunion.setUTCHours(horaReunion.getUTCHours() + 7); // Ajustar a España
console.log("Hora de la reunión en España:", formatoFechaHora(horaReunion));
