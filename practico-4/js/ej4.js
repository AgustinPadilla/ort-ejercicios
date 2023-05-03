document.querySelector('#btnEj4').addEventListener('click',calcular);

function calcular(){
    base = Number(document.querySelector('#nmb1Ej4').value);
    altura = Number(document.querySelector('#nmb2Ej4').value);

    document.querySelector('#pRetEj4').innerHTML = 'Area del triangulo: ' + calcularAreaTriangulo(base,altura);
}

function calcularAreaTriangulo(base, altura) { 
    if (base < 0 || altura < 0) {
        return -1
    }else{
        return base*altura/2
    }

}