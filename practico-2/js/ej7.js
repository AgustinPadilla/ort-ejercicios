document.querySelector("#btnCalcularEj7").addEventListener("click", calcular);
function calcular(){
    let valor = document.querySelector("#nmbValorEj7").value;
    if (-20 < valor && valor < 20){
        document.querySelector("#pResultadoEj7").innerHTML ="NO CUMPLE" ;
    } else {
        document.querySelector("#pResultadoEj7").innerHTML ="CUMPLE" ;
    }
}