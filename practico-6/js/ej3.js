let arrEj3 = []
document.querySelector('#btnGuardarEj3').addEventListener('click', guardar)

function guardar(){
    arrEj3.push(document.querySelector('#txtEj3').value);
}

document.querySelector('#btnMostrarEj3').addEventListener('click', mostrar)

function mostrar() { 
    let result = ''
    for (let i = 0; i < arrEj3.length; i++) {
        result += arrEj3[i] + '<br>';
    }
    document.querySelector('#pResultEj3').innerHTML = result
 }