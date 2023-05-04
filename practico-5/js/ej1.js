document.querySelector('#btnEj1').addEventListener('click', mostrar);

function mostrar() {
    let txt = document.querySelector('#txtEj1').value;
    document.querySelector('#pResultEj1').innerHTML = invertir(txt);
}

function invertir(txt) {
    let result = ''
    for (let i = txt.length - 1; i >= 0; i--) {
        result += txt.charAt(i)
    }
    return result
}