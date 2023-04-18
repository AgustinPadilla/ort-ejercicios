document.querySelector('#btnCalcularEj21').addEventListener('click', calcular);

function calcular(){
    let ingresos = Number(document.querySelector('#nmbIngresosEj21').value);
    let casa = Number(document.querySelector('#nmbCasaEj21').value);
    let pago;
    let cuota;
    if (ingresos < 20000){
        pago = casa * 0.15;
        cuota = (casa - pago) / (7*12);
    }else{
        pago = casa * 0.3;
        cuota = (casa - pago) / 12;
    }
    document.querySelector('#pResultadoEj21').innerHTML = 'Primero pago: ' + pago + ' Cuota: ' + cuota;
}