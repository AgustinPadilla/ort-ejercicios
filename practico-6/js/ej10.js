let arrEj10 = [];
document.querySelector('#btnGuardarEj10').addEventListener('click', guardar)

function guardar() {
    arrEj10.push(document.querySelector('#txtEj10').value)
    imprimir()
}


document.querySelector('#btnBorrarEj10').addEventListener('click', borrar)

function borrar() {
    let txt = document.querySelector('#txtEj10').value
    if (noContiene(arrEj10, txt)) {
        alert('No se encuentra')
    } else {
        for (let i = 0; i < arrEj10.length; i++) {
            if (arrEj10[i] === txt) {
                arrEj10.splice(i, 1)
            }
        }
    }
    imprimir()
}

function imprimir() {
    let result = ''
    for (let i = 0; i < arrEj10.length; i++) {
        result += arrEj10[i] + '<br>';
    }
    document.querySelector('#pResultEj10').innerHTML = result
}