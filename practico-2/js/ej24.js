let sueldoMinimo = 999999999;
let contSueldo = 0;
let sumaSueldo = 0;
document.querySelector('#btnCalcularEj24').addEventListener('click', calcularNotas);
function calcularNotas() {
    let sueldo = Number(document.querySelector('#nmbSueldoEj24').value);
    if(sueldo < sueldoMinimo){
        sueldoMinimo = sueldo
    }
    contSueldo ++
    sumaSueldo += sueldo;

    document.querySelector('#pResultadoEj24').innerHTML = 'Total a pagar: '+sumaSueldo
    +' Cantidad de empleados que cobraran: '+contSueldo
    +' Sueldo mas bajo: '+sueldoMinimo;
}