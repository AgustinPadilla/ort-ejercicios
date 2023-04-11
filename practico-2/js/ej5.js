document.querySelector("#btnCalcularEj5").addEventListener("click", calcular);
function calcular(){
    let valor = document.querySelector("#nmbValorEj5").value;
    if (10 < valor && valor < 20){
        document.querySelector("#pResultadoEj5").innerHTML ="El número es mayor que 10 y menor que 20" ;
    } else {
        document.querySelector("#pResultadoEj5").innerHTML ="El número NO es mayor que 10 y menor que 20" ;
    }
}