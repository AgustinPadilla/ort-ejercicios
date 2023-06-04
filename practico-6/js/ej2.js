let arrayEj2 = [];
document.querySelector('#btnGuardarEj2').addEventListener('click', guardar)

function guardar() { 
    arrayEj2.push(document.querySelector('#nmbEj2').value)
 }

 document.querySelector('#btnMostrarEj2').addEventListener('click', mostrar);
 
 function mostrar() { 
     document.querySelector('#pResultEj2').innerHTML = mayor(arrayEj2);
  }


function mayor (arr){
    let mayor = Number(arr[0])
    for (let i = 0; i < arr.length; i++) {
        if(mayor < Number(arr[i])){
            mayor = Number(arr[i])
        }
    }
    return mayor
} 