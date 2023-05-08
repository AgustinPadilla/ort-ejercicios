document.querySelector('#btnEj11').addEventListener('click', mostrar);

function mostrar() {
    let texto = document.querySelector('#txtEj11').value;
    let letra = texto.substring(0, 1)
    texto = texto.toLowerCase()
    texto = letra.toUpperCase() + texto.substring(1,texto.length)
    document.querySelector('#pResultEj11').innerHTML = texto
}