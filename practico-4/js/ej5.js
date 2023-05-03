document.querySelector('#btnEj5').addEventListener('click',calcular);

function calcular(){
    ancho = Number(document.querySelector('#nmb1Ej5').value);
    alto = Number(document.querySelector('#nmb2Ej5').value);

    document.querySelector('#pRetEj5').innerHTML = 'Area del triangulo: ' + calcularAreaRectangulo(ancho,alto);
}

function calcularAreaRectangulo(ancho, alto) { 
    if (ancho < 0 || alto < 0) {
        return -1
    }else{
        return ancho*alto
    }

}