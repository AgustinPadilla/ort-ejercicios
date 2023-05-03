document.querySelector('#btnEj8').addEventListener('click',calcular);

function calcular(){
    base = Number(document.querySelector('#nmb1Ej8').value);
    exp = Number(document.querySelector('#nmb2Ej8').value);

    document.querySelector('#pRetEj8').innerHTML = calPotencia(base,exp);
}

function calPotencia(base,exp) {
    let result = 1; 
    for (let i = 0; i < exp; i++) {
        result = result*base
    }
    return result
 }