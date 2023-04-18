let numOculto;
let intentos = 0;

document.querySelector('#btnInOcultoEj27').removeAttribute('disabled');

document.querySelector('#btnInOcultoEj27').addEventListener('click', inOculto)
function inOculto() {
    numOculto = Number(document.querySelector('#nmbOcultoEj27').value);
    document.querySelector('#btnInOcultoEj27').setAttribute('disabled', true)
}

document.querySelector('#btnProbarEj27').addEventListener('click', probar)
function probar() {
    intentos ++
    let num = Number(document.querySelector('#nmbIntentoEj27').value);
    let distancia = numOculto - num;
    let mensaje
    if (distancia > 15 || distancia < -15) {
        mensaje = 'Estas lejos'
    }
    if (15 >= distancia && distancia >= 10 || -15 <= distancia && distancia <= -10) {
        mensaje = 'Te estas acercando'
    }
    if (9 >= distancia && distancia >= 5 || -9 <= distancia && distancia <= -5) {
        mensaje = 'Cada vez más cerca'
    }
    if (4 >= distancia && distancia >= 1 || -4 <= distancia && distancia <= -1) {
        mensaje = 'Muy pero muy cerca'
    }
    if (distancia == 0) {
        mensaje = 'Has ganado! Necesitaste '+intentos+' intentos.'
    }

    document.querySelector('#pResultadoEj27').innerHTML = mensaje;
}

