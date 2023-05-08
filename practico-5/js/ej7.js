document.querySelector('#btnEj7').addEventListener('click', contar);

function contar() {
    let texto = document.querySelector('#txtEj7').value;
    texto = limpiar(texto)
    let palabras = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === " ") {
            palabras ++    
        }
    }
    palabras ++
    document.querySelector('#pResultEj7').innerHTML = "Cantidad de palabras: " + palabras
}

function limpiar(txt) { 
    for (let i = 0; i < txt.length; i++) {
        let txtSub = ""
        if (txt.charAt(i) === " ") {
            txtSub = txt.substring(i+1,txt.length)
        }else{
            break
        }
            txt = txtSub
    }
    for (let i = txt.length -1; i > 0; i--) {
        if (txt.charAt(i) === " ") {
            txt = txt.substring(0,i)
        }else{
            break
        }
    }
    return txt
 }