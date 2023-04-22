document.querySelector('#btnImpEj8').addEventListener('click', imprimir);

function imprimir() { 
    let num1 = Number(document.querySelector('#nmb1Ej8').value);
    let num2 = Number(document.querySelector('#nmb2Ej8').value);
    let result = '';
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            result += i;
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            result += i;
        }
    }
    

    document.querySelector('#pResulEj8').innerHTML = result
 }