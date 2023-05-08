document.querySelector('#btnEj8').addEventListener('click', contar);

function contar() {
    let texto = document.querySelector('#txtEj8').value;

    if (texto.charAt(0) === texto.charAt(texto.length-1)) {
        document.querySelector('#pResultEj8').innerHTML = "Comienza y termina con la misma letra"
    }else{
        document.querySelector('#pResultEj8').innerHTML = "No comienza y termina con la misma letra"
    }

}