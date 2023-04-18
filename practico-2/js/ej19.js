let contadorEj19 = 0;
let resultadoEj19 = '';
document.querySelector('#btnCalcularEj19').removeAttribute('disabled')
document.querySelector('#btnCalcularEj19').addEventListener('click', sumar);
function sumar(){
    let valor = Number(document.querySelector('#nmbValorEj19').value);
    document.querySelector('#pResultadoEj19').setAttribute('disabled', true)
    if (valor%5 == 0 && valor > 20){
        resultadoEj19 += valor + ' cumple ambas condiciones<br>';
    }else{
        if (valor%5 == 0){
            resultadoEj19 += valor + ' Es multiplo de 5<br>';
        }
        if (valor > 20){
            resultadoEj19 += valor + ' Es mayor de 20<br>';
        }
    }
    contadorEj19 ++
    if(contadorEj19 == 5){
        document.querySelector('#pResultadoEj19').innerHTML = resultadoEj19
        document.querySelector('#btnCalcularEj19').setAttribute('disabled', true)
    }
}