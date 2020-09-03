const formulario = document.getElementById('formulario')
const txtApeNombre = document.getElementById('txtApeNombre')
const txtTelefono = document.getElementById('txtTelefono')
const txtEmail = document.getElementById('txtEmail')
const TextArea = document.getElementById('Textarea')
const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click',enviarDatos)


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
        alert('Debe ingresar su consulta')
        return false
    }   
    return true
}

function enviarDatos(e){
    e.preventDefault();

    if(validarTxt()){
        alert('Datos Cargados Correctamente')
        alert(`Gracias Cliente :  ${txtApeNombre.value} !!`)        
    }
}