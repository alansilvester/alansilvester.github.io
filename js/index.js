var intentos = 4;
var solucion = "Bariloche";
var idResolver = document.getElementById("idResolver");
var cantIntento = 4;

idResolver.addEventListener("click", resolver);

function resolver() {
  let nombre = prompt("Ingrese su nombre");
  let cantIntento = 4;
  let respuesta = prompt("Hola " + nombre + " ingresa tu respuesta!");
  for (let index = 0; index < intentos; index++) {
    cantIntento--;    
    if (respuesta == solucion) {
      swal("Felicitaciones " + nombre + " la respuesta es correcta!!");
      break;
    } else if (solucion != respuesta && cantIntento == 3) {
      alert("Respuesta incorrecta!! Le quedan "+ cantIntento + " intentos!!");
      respuesta = prompt("Ingrese otra respuesta!");
    } else if (solucion != respuesta && cantIntento == 2) {
        alert("Respuesta incorrecta!! Le quedan "+ cantIntento + " intentos!!");
        alert("Una ayuda: es la cuidad de los Egresados!!")
        respuesta = prompt("Ingrese otra respuesta!");
    } else if (solucion != respuesta && cantIntento == 1) {
        alert("Respuesta incorrecta!! Le quedan "+ cantIntento + " intentos!!");
        alert("Última ayuda: en ella se encuentra el Parque Nacional Nahuel Huapi")
        respuesta = prompt("Ingrese otra respuesta!");
    } else if (solucion != respuesta && cantIntento == 0) {
        swal("Error la respuesta es " + solucion + "!!");
    }
  }
}
