var formulario = document.getElementById('formulario')
var txtApeNombre = document.getElementById('txtApeNombre')
var txtTelefono = document.getElementById('txtTelefono')
var txtEmail = document.getElementById('txtEmail')
var TextArea = document.getElementById('Textarea')
var btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click',enviarDatos);


function validarTxt(){
    if (txtApeNombre.value === '') {
        alert('Debe ingresar su nombre y apellido')
        return false
    }
    if(txtEmail.value === ''){
        alert('Debe ingresar su Email');
        return false
    }
    
    if(isNaN(txtTelefono.value) || txtTelefono.value === ''){
        alert('Debe ingresar N° de telefono valido (solo Numeros)')
        return false
    }
    if (TextArea.value === '') {
        alert('Ingrese su consulta')
        return false
    }   
    return true
}

function enviarDatos(){

    if(validarTxt()){
        alert('Datos Cargados Correctamente')
        alert(`Gracias ${txtApeNombre.value} por su consulta!!`)
        formulario.reset();
    }
}