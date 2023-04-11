document.querySelector("#btnCalcularEj3").addEventListener("click", calcular);
function calcular(){
    let valor = document.querySelector("#nmbValorEj3").value;
    if (valor > 20){
        document.querySelector("#pResultadoEj3").innerHTML = "El numero es mayor a 20"
    } else {
        document.querySelector("#pResultadoEj3").innerHTML = "El numero es menor o igual a 20"
    }
}