document.querySelector('#btnCalcularEj22').addEventListener('click', calcular);

function calcular(){
    let monto = Number(document.querySelector('#nmbMontoEj22').value);
    let tarjeta = document.querySelector('#txtTarjetaEj22').value;
    let montoFinal;

    if(tarjeta == 's' && monto < 10000){
        montoFinal = monto * 0.96
    } else {
        montoFinal = monto;
    }
    document.querySelector('#pResultadoEj22').innerHTML = 'El monto final es:' + montoFinal;
}