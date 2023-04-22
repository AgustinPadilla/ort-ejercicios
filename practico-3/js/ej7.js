document.querySelector('#btnImpEj7').addEventListener('click', imprimir);

function imprimir() { 
    let num = Number(document.querySelector('#nmbEj7').value);
    let result = "el numero debe estar entre 2 y 50";

    if(num >= 2 && num <= 50){
        result = ''
        for (let i = 0; i < num; i++) {
            result += '-'   
        }
    }

    document.querySelector('#pResulEj7').innerHTML = result
 }