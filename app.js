function asignarTextoElemento(elemento,texto) {
    //Consulta el elemento seleccionado e ingresa el texto
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
}

function encriptarTexto() {
    //selecciona el elemento con id = textoDeEntrada
    let textoEncriptado = document.getElementById('textoDeEntrada').value;
    if(textoEncriptado.includes('e')){
        textoEncriptado = textoEncriptado.replaceAll('e','enter');
    }
    if(textoEncriptado.includes('i')){
        textoEncriptado = textoEncriptado.replaceAll('i','imes');
    }
    if(textoEncriptado.includes('a')){
        textoEncriptado = textoEncriptado.replaceAll('a','ai');
    }
    if(textoEncriptado.includes('a')){
        textoEncriptado = textoEncriptado.replaceAll('o','ober');
    }
    if(textoEncriptado.includes('a')){
        textoEncriptado = textoEncriptado.replaceAll('u','ufat');
    }
    asignarTextoElemento('#textoDeSalida',textoEncriptado);
    limpiarCaja();
    return;
}

function desencriptarTexto() {
    //selecciona el valor del elemento con id textoDeEntrada 
    let textoDesencriptado = document.getElementById('textoDeEntrada').value;
    //desencriptando
    if(textoDesencriptado.includes('enter')){
        textoDesencriptado = textoDesencriptado.replaceAll('enter','e');
    }
    if(textoDesencriptado.includes('imes')){
        textoDesencriptado = textoDesencriptado.replaceAll('imes','i');
    }
    if(textoDesencriptado.includes('ai')){
        textoDesencriptado = textoDesencriptado.replaceAll('ai','a');
    }
    if(textoDesencriptado.includes('ober')){
        textoDesencriptado = textoDesencriptado.replaceAll('ober','o');
    }
    if(textoDesencriptado.includes('ufat')){
        textoDesencriptado = textoDesencriptado.replaceAll('ufat','u');
    }
    //Asignamos un texto al elemento p
    asignarTextoElemento('#textoDeSalida',textoDesencriptado);
    limpiarCaja();
    return;  
}

function copiarTexto() {

}

function limpiarCaja() {
    //Selecciona el elemento de html con id textoDeEntrada y le asigna el valor ''
    let limpiarCaja = document.getElementById('textoDeEntrada').value = '';
}