let arrEj5 = []
document.querySelector('#btnGuardarEj5').addEventListener('click', guardar)

function guardar(){
    arrEj5.push(Number(document.querySelector('#txtEj5').value));
}

document.querySelector('#btnMostrarEj5').addEventListener('click', mostrar)

function mostrar() { 
    document.querySelector('#pResultEj5').innerHTML = mayorA20(arrEj5)
}

function mayorA20(arr){
    result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20){
            result.push(arr[i])
        }
    }
    return result
}