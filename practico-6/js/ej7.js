let arrEj7 = []
document.querySelector('#btnIngresarEj7').addEventListener('click', ingresar)

function ingresar() { 
    arrEj7.push(document.querySelector('#txtEj7').value);
    let result = ''
    for (let i = 0; i < arrEj7.length; i++) {
        result += arrEj7[i] + '<br>';
    }
    result += 'Cantidad de nombres: ' + arrEj7.length 
    document.querySelector('#pResultEj7').innerHTML = result
 }

 document.querySelector('#btnPosEj7').addEventListener('click', posicion)
 
 function posicion() {
    let posFinal = arrEj7.length-1
    let pos = Number(document.querySelector('#nmbPosEj7').value)
    document.querySelector('#pElemPosEj7').innerHTML = 'Posicion ingresada: '+ arrEj7[pos]
    document.querySelector('#pElemFinalEj7').innerHTML = 'Posicion final: ' + arrEj7[posFinal]
    
}

document.querySelector('#btnBuscarEj7').addEventListener('click', buscar)

function buscar() { 
    let nomBuscado = document.querySelector('#txtBuscarEj7').value
    let nomNuevo = document.querySelector('#txtNuevoEj7').value
    if (noContiene(arrEj7, nomBuscado)) {
        alert('No se encuentra el nombre buscado')
    }else{
        for (let i = 0; i < arrEj7.length; i++) {
            if (arrEj7[i] === nomBuscado) {
                arrEj7[i] = nomNuevo
            }
        }
    }
    
 }
