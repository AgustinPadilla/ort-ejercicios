document.querySelector('#btnEj2').addEventListener('click',calcular);

function calcular(){
    let edad = Number(document.querySelector('#nmb1Ej2').value);
    let tope = Number(document.querySelector('#nmb2Ej2').value);
    let mensaje;
    if (esMayor(edad,tope)) {
        mensaje = 'Es mayor'
    }else{
        mensaje = 'No es mayor'
    }

    document.querySelector('#pRetEj2').innerHTML = mensaje;
}

function esMayor(edad, tope) {
    if (edad > tope) {
        return true
    } else {
        return false
    }
 }