document.querySelector('#btnEj3').addEventListener('click', mostrar);

function mostrar() {
    let txt = document.querySelector('#txtEj3').value;
    document.querySelector('#pResultEj3').innerHTML = buscarVocal(txt);
}

function buscarVocal(txt) {
    let result = 0;
    txt = txt.toLowerCase();
    for (let i = 0; i < txt.length; i++) {
        let letra = txt.charAt(i)
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            result ++
        }
    }
    return result
}