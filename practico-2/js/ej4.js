document.querySelector("#btnCalcularEj4").addEventListener("click", calcular);
function calcular(){
    let valor = document.querySelector("#nmbValorEj4").value;
    if (valor < 0){
        valor = valor * -1;
        document.querySelector("#pResultadoEj4").innerHTML ="Numero negativo, se pasa a positivo: " + valor ;
    } else {
        document.querySelector("#pResultadoEj4").innerHTML ="Numero positivo: " + valor ;
    }
}