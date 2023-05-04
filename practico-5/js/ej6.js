document.querySelector('#btnEj6').addEventListener('click', mostrar);

function mostrar() {
    let txt = document.querySelector('#txt1Ej6').value;
    let sub = document.querySelector('#txt2Ej6').value;
    document.querySelector('#pResultEj6').innerHTML = buscarSub(txt,sub);
}

function buscarSub(txt,sub) {
    let indice = txt.indexOf(sub)
    let result = ''
    if (indice >= 0) {
        result = 'La cadena se encuentra dentro del texto'
    }else{
        result = 'No se encuentra la subcadena'
    }

    return result
}