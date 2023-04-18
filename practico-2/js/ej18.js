let totalEj18 = 0;
let contadorEj18 = 0;
document.querySelector('#btnCalcularEj18').removeAttribute('disabled')
document.querySelector('#btnCalcularEj18').addEventListener('click', sumar);
function sumar(){
    let valor = Number(document.querySelector('#nmbValorEj18').value);
    totalEj18 += valor;
    contadorEj18 ++
    if(contadorEj18 == 6){
        document.querySelector('#pResultadoEj18').innerHTML = totalEj18;
        document.querySelector('#btnCalcularEj18').setAttribute('disabled', true)
    }
}
