document.querySelector('#btnImpEj9').addEventListener('click', imprimir);

function imprimir() { 
    let num1 = Number(document.querySelector('#nmb1Ej9').value);
    let num2 = Number(document.querySelector('#nmb2Ej9').value);
    let result = 0;
    
    if (num2 > 0) {
        for (let i = 0; i < num2; i++) {
            result += num1
        }
    }else{
        for (let i = 0; i > num2; i--) {
            result -= num1
        }
    }


    document.querySelector('#pResulEj9').innerHTML = result
 }