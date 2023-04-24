document.querySelector('#btnCalEj13').addEventListener('click', calcular);

function calcular(){
    let ancho = Number(document.querySelector('#nmbAnchoEj13').value);
    let alto = Number(document.querySelector('#nmbAltoEj13').value);
    let fila = ''; 
    let cuadrado = '';
    for (let i = 0; i < alto; i++) {
        for (let i = 0; i < ancho; i++) {
            fila += '*'
        }
        cuadrado += fila + '<br>'
        fila = '';
    }

    document.querySelector('#pResulEj13').innerHTML = cuadrado
}