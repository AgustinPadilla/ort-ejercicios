let arrEj6 = []
document.querySelector('#btnIngresarEj6').addEventListener('click', ingresar)

function ingresar() {
    let usuario = document.querySelector('#txtEj6').value
    if (noContiene(arrEj6, usuario)) {
        arrEj6.push(usuario);
        let result = ''
        for (let i = 0; i < arrEj6.length; i++) {
            result += arrEj6[i] + '<br>';
        }
        document.querySelector('#pResultEj6').innerHTML = result
    }
}

function noContiene(array, txt) {
    let result = true
    for (let i = 0; i < array.length; i++) {
        if (array[i] === txt) {
            result = false
        }
    }
    return result
}