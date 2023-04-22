document.querySelector('#btnImpEj11').addEventListener('click', imprimir);

function imprimir() { 
    let num1 = Number(document.querySelector('#nmb1Ej11').value);
    let num2 = Number(document.querySelector('#nmb2Ej11').value);
    let num3 = Number(document.querySelector('#nmb3Ej11').value);
    let result = '';
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            if (i % num3 == 0) {
                result += i + '<br>';
            }
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            if (i % num3 == 0) {
                result += i + '<br>';
            }
        }
    }
    

    document.querySelector('#pResulEj11').innerHTML = result
 }