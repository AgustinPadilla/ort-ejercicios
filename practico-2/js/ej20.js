document.querySelector('#btnCalcularEj20').addEventListener('click', calcular);

function calcular(){
    let azucar = Number(document.querySelector('#nmbAzucarEj20').value);
    let harina = Number(document.querySelector('#nmbHarinaEj20').value)/100;
    let aceite = Number(document.querySelector('#nmbAceiteEj20').value);
    let agua = Number(document.querySelector('#nmbAguaEj20').value);
    let resultado = azucar
    if(harina < resultado) {
        resultado = harina
    }
    if(aceite < resultado) {
        resultado = aceite
    }
    if(agua < resultado) {
        resultado = agua
    }
    document.querySelector('#pResultadoEj20').innerHTML = 'Puede realizar ' + resultado + ' recetas de galletas'
}