document.querySelector('#btnImpEj14').addEventListener('click', imprimir);

function imprimir() { 
    let num = Number(document.querySelector('#nmbEj14').value);
    let digitos = 0;

    do {
        num = num /10
        digitos++
    } while (num >= 1);

    document.querySelector('#pResulEj14').innerHTML = 'El numero tiene '+digitos+' digitos'
 }