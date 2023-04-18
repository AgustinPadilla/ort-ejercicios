let notaMaxima = 0;
let notaMinima = 100;
let perdidos = 0;
let salvados = 0;
let buenaNota = 0;
let contadorNotas = 0;
let sumaNotas = 0;
document.querySelector('#btnCalcularEj23').addEventListener('click', calcularNotas);
function calcularNotas() {
    let nota = Number(document.querySelector('#nmbNotaEj23').value);
    if (nota < 70){
        perdidos ++
    }else if (nota > 90 ){
        buenaNota ++
    } else {
        salvados ++
    }

    if(nota < notaMinima){
        notaMinima = nota
    }
    if(nota > notaMaxima){
        notaMaxima = nota;
    }
    contadorNotas ++
    sumaNotas += nota;
    let promedio = sumaNotas / contadorNotas

    document.querySelector('#pResultadoEj23').innerHTML = 'Perdidos: '+perdidos+' Salvados: '+salvados
    +' Buena nota: '+buenaNota+' Nota minima: '+notaMinima+' Nota Máxima: '+notaMaxima+' Promedio: '+promedio;
}