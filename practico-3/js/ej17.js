document.querySelector('#btnCalEj17').addEventListener('click', calcular);

function calcular(){
    let num1 = Number(document.querySelector('#nmb1Ej17').value);
    let num2 = Number(document.querySelector('#nmb2Ej17').value);
    let cociente = 0;
    let resto = num1;

    while (resto >= num2){
        resto -=num2
        cociente ++
    }

     document.querySelector('#pResulEj17').innerHTML = `Cociente: ${cociente} Resto: ${resto}`
}