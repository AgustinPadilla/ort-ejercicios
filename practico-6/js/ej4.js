let arrEj4 = []
document.querySelector('#btnGuardarEj4').addEventListener('click', guardar)

function guardar(){
    arrEj4.push(Number(document.querySelector('#txtEj4').value));
}

document.querySelector('#btnMostrarEj4').addEventListener('click', mostrar)

function mostrar() { 
    let result = 0
    for (let i = 0; i < arrEj4.length; i++) {
        result += arrEj4[i];
    }
    document.querySelector('#pResultEj4').innerHTML = result/arrEj4.length
 }