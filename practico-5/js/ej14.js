document.querySelector('#btnEj14').addEventListener('click', mostrar);

function mostrar() {
    let texto = document.querySelector('#txtEj14').value;
   
    document.querySelector('#pResultEj14').innerHTML = `Cantidad de veces que se repite la primer letra: ${contarLetra(texto)}`
}

function contarLetra(texto){
    texto = texto.toLowerCase();
    let letra = texto.charAt(0)
    let cont = 0;
    for (let i = 0; i < texto.length; i++) {
        if (letra === texto.charAt(i)) {
            cont ++
        }
    }
    return cont
}