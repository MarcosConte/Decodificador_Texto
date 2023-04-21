

var textoDigitado = document.querySelector('.insereTexto');
var textoCodificado = document.querySelector('.retornaTexto');
var btCodificarTexto = document.querySelector('.btCodificar'); 
var btDecodificarTexto = document.querySelector('.btDcodificar');
var btCopiarTexto = document.querySelector('.btCopiar');  

focus('.insereTexto');

function codificar() {
    var encriptar = textoDigitado.value;
    let textoEncripitado = encriptar
    .replaceAll('e','enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    textoCodificado.value = textoEncripitado;

    /*var texto = document.querySelector(".insereTexto").value;
    document.querySelector(".retornaTexto").value = texto;  */          
    
}        

function decodificar() {
    var decriptar = textoDigitado.value;
    let textoEncripitado = decriptar
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

    textoCodificado.value = textoEncripitado;
}

function copiar() {
    /*var copiarTexto = textoCodificado.value;*/
    textoCodificado.select();
    textoCodificado.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("O texto copiado é " + textoCodificado.value);
}