document.querySelector("#btnCalcularEj10").addEventListener("click", calcular);
function calcular(){
    let valor1 = Number(document.querySelector("#nmbValor1Ej10").value);
    let valor2 = Number(document.querySelector("#nmbValor2Ej10").value);
    if (valor1 > valor2){
        document.querySelector("#pResultadoEj10").innerHTML = valor1 - valor2;
    }
    if (valor1 < valor2){
        document.querySelector("#pResultadoEj10").innerHTML = valor2 - valor1;
    }
}