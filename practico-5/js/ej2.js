document.querySelector('#btnEj2').addEventListener('click', mostrar);

function mostrar() {
    let txt = document.querySelector('#txt1Ej2').value;
    let letra = document.querySelector('#txt2Ej2').value;
    document.querySelector('#pResultEj2').innerHTML = buscarLetra(txt,letra);
}

function buscarLetra(txt,letra) {
    let result = 0;
    for (let i = 0; i < txt.length; i++) {
        if (txt.charAt(i) === letra) {
            result ++
        }
    }
    return result
}