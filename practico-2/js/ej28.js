let puntaje1 = 0;
let puntaje2 = 0;

document.querySelector('#btnInPuntaje').removeAttribute('disabled')
document.querySelector('#btnInPuntaje').addEventListener('click', inPuntaje);
function inPuntaje(){
    puntaje1 += Number(document.querySelector('#nmbEquipo1').value) 
    puntaje2 += Number(document.querySelector('#nmbEquipo2').value) 

    if(puntaje1 >= 30 || puntaje2 >= 30){
        document.querySelector('#pResultadoEj28').innerHTML = `Hay un ganador!!! <br> Equipo 1: ${puntaje1} - Equipo 2: ${puntaje2}`
        document.querySelector('#btnInPuntaje').setAttribute('disabled', true)
    }else{
        document.querySelector('#pResultadoEj28').innerHTML = `Equipo 1: ${puntaje1} - Equipo 2: ${puntaje2}`
    }

}