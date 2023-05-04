document.querySelector('#btnEj4').addEventListener('click', mostrar);

function mostrar() {
    let txt = document.querySelector('#txtEj4').value;
    document.querySelector('#pResultEj4').innerHTML = txt.toLowerCase();
}
