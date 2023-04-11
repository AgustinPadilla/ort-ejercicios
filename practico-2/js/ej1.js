document.querySelector("#btnCalcularEj1").addEventListener("click", calcular);
function calcular(){
    let valor = document.querySelector("#nmbValorEj1").value;
    if (valor > 0){
        document.querySelector("#pResultadoEj1").innerHTML = "El numero es positivo"
    } else {
        document.querySelector("#pResultadoEj1").innerHTML = "El numero es negativo"
    }
}