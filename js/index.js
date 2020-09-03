var btnCataratas = document.getElementById("btnCataratas");
var btnBariloche = document.getElementById("btnBariloche");
var btnGrutas = document.getElementById("btnGrutas");
var btnBolson = document.getElementById("btnBolson");
var btnCordoba = document.getElementById("btnCordoba");
var btnRosario = document.getElementById("btnRosario");
var btnUshuaia = document.getElementById("btnUshuaia");
var btnParana = document.getElementById("btnParana");
var btnNinguno = document.getElementById("btnNinguno");

var intentos = 4;

var btnAyuda1 = document.getElementById("btnAyuda1");
var btnAyuda2 = document.getElementById("btnAyuda2");

btnAyuda1.addEventListener("click", ayuda1);
btnAyuda2.addEventListener("click", ayuda2);



function ayuda1() {
  swal("Ciudad de los egresados.");
}

function ayuda2() {
  swal("Se encuentra el Parque Nacional Nahuel Huapi.");
}


