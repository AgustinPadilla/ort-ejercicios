document.querySelector('#btnEj3').addEventListener('click',calcular);

function calcular(){
    anio = Number(document.querySelector('#nmb1Ej3').value);
    document.querySelector('#pRetEj3').innerHTML = esBisiesto(anio);
}

function esBisiesto(anio) { 
    if(anio%4 === 0 && !anio%100 != 0 || anio%400 === 0){
        return true
    }else {
        return false
    }
 }