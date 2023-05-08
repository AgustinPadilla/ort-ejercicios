document.querySelector('#btnEj13').addEventListener('click', mostrar);

function mostrar() {
    let txt = limpiar(document.querySelector('#txtEj13').value);
    let txtInv = limpiar(invertir(txt));
    let mensaje;
    if (txt === txtInv) {
        mensaje = "Es palindromo"
    } else {
        mensaje = "no es palindromo"
    }
    document.querySelector('#pResultEj13').innerHTML = mensaje;
}

function invertir(txt) {
    let result = ''
    for (let i = txt.length - 1; i >= 0; i--) {
        result += txt.charAt(i)
    }
    return result
}

function limpiar(txt){
    let result = ''
    txt = txt.toLowerCase()
    for (let i = 0; i < txt.length; i++) {
        if (txt.charAt(i) != " ") {
            switch (txt.charAt(i)) {
                case 'á':
                    result += 'a'
                    break;
                case 'é':
                    result += 'e'
                    break;
                case 'í':
                    result += 'i'
                    break;
                case 'ó':
                    result += 'o'
                    break;
                case 'ú':
                    result += 'u'
                    break;
                default:
                    result += txt.charAt(i)
                    break;
            }
        }
    }

    return result
}