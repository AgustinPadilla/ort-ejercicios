document.querySelector('#btnImpEj10').addEventListener('click', imprimir);

function imprimir() { 
    let num1 = Number(document.querySelector('#nmb1Ej10').value);
    let num2 = Number(document.querySelector('#nmb2Ej10').value);
    let result = num1;

    for (let i = num1; i <= num2; i++) {
        result = result * i    
    }


    document.querySelector('#pResulEj10').innerHTML = result
 }