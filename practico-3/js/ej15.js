document.querySelector('#btnImpEj15').addEventListener('click', imprimir);

function imprimir() { 
    let num = Number(document.querySelector('#nmbEj15').value);
    if (num > 2000) {
        do {
            num = num /20
        } while (num >= 100);
    }else{
        num = 'Ingrese un valor mayor a 2000'
    }

    document.querySelector('#pResulEj15').innerHTML ='El resultado es: ' + num
 }