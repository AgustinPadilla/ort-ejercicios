document.querySelector('#btnEj5').addEventListener('click', mostrar);

function mostrar() {
    let txt = document.querySelector('#txtEj5').value;
    document.querySelector('#pResultEj5').innerHTML = txt.toUpperCase();
}
