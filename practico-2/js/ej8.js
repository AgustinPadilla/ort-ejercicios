document.querySelector("#btnCalcularEj8").addEventListener("click", calcular);
function calcular(){
    let valor = document.querySelector("#nmbValorEj8").value;
    if (30  < valor){
        document.querySelector("#pResultadoEj8").innerHTML ="Es mayor que treinta" ;
    } else if(valor < 10) {
        document.querySelector("#pResultadoEj8").innerHTML ="Menor de 10" ;
    } else {
        document.querySelector("#pResultadoEj8").innerHTML ="Entre diez y treinta" ;
    }
}