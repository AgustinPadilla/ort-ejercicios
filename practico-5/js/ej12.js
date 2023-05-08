document.querySelector('#btnEj12').addEventListener('click', mostrar);

function mostrar() {
    let texto = document.querySelector('#txtEj12').value;
    let min = 0;
    let may = 0;
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charCodeAt(i);

        if (letra >=65 && letra <= 90) {
            may ++
        } else if (letra >= 97 && letra <= 122) {
            min ++
        }
    }
    document.querySelector('#pResultEj12').innerHTML = `Letras Mayusculas: ${may} <br> Letras minusculas: ${min}`
}