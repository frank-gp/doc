// Selecciona todas las imágenes en la página
const images = Array.from(document.querySelectorAll("img"));

// Filtra solo las que terminan en .webp
const webpUrls = images.map((img) => img.src).filter((src) => src.endsWith(".webp"));

// Mostrar todas las URLs en consola
if (webpUrls.length) {
  console.log("URLs .webp encontradas:", webpUrls.length);
  webpUrls.forEach((url) => console.log(url));
} else {
  console.log("No se encontraron imágenes .webp en esta página.");
}
