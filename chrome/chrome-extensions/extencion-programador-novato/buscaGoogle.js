//buscaGoogle.js
//Buscamos el input text llamado q y le escribimos programador novato
document.querySelector('textarea[name="q"]').value="programador novato";
//Creamos el evento click
var evt = new MouseEvent('click', {
    bubbles: true,
	cancelable: true,
	view: window
});
//Si no se cancela el evento lo ejecutamos
var canceled = !document.querySelector('input[name="btnK"]').dispatchEvent(evt);
