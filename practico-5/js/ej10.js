document.querySelector('#btnEj10').addEventListener('click', mostrar);

function mostrar() {
    let texto = document.querySelector('#txt1Ej10').value;
    let letra = document.querySelector('#txt2Ej10').value;

    document.querySelector('#pResultEj10').innerHTML = sustituir(texto, letra)
}

function sustituir(texto, letra) {
    textoMay = texto.toUpperCase()
    letraMay = letra.toUpperCase()
    let result = ""
    for (let i = 0; i < texto.length; i++) {
        if (textoMay.charAt(i) != letraMay) {
            result += texto.charAt(i)
        }else{
            result += "*"
        }
    }
    return result
}