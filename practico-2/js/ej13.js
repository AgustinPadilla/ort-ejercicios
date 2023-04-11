document.querySelector("#btnCalcularEj13").addEventListener("click", calcular);
function calcular(){
    let valor1 = Number(document.querySelector("#nmbValor1Ej13").value);
    let valor2 = Number(document.querySelector("#nmbValor2Ej13").value);
    if (valor1 % valor2 == 0){
        document.querySelector("#pResultadoEj13").innerHTML = "Es multiplo";
    }else {
        document.querySelector("#pResultadoEj13").innerHTML = "No es multiplo";
    }
}