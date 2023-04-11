document.querySelector("#btnCalcularEj2").addEventListener("click", calcular);
function calcular(){
    let valor = document.querySelector("#nmbValorEj2").value;
    if (valor > 10){
        document.querySelector("#pResultadoEj2").innerHTML = "Mayor que diez"
    } 
}