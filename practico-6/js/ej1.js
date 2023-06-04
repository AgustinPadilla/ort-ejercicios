let arrayEj1 = [];
document.querySelector('#btnGuardarEj1').addEventListener('click', guardar)

function guardar() { 
    arrayEj1.push(document.querySelector('#txtEj1').value)
 }

 document.querySelector('#btnMostrarEj1').addEventListener('click', mostrar);
 
 function mostrar() { 
     document.querySelector('#pResultEj1').innerHTML = contCaract(arrayEj1);
  }


function contCaract (arr){
    let arrCont = []
    for (let i = 0; i < arr.length; i++) {
        arrCont.push(arr[i].length);
    }
    return arrCont
} 