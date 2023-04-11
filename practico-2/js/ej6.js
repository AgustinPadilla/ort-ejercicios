document.querySelector("#btnCalcularEj6").addEventListener("click", calcular);
function calcular(){
    let valor = document.querySelector("#nmbValorEj6").value;
    if (valor % 7 === 0 && valor % 3 === 0){
        document.querySelector("#pResultadoEj6").innerHTML ="El número es multiplo de 7 y de 3" ;
    } else {
        document.querySelector("#pResultadoEj6").innerHTML ="El número NO es multiplo de 7 y de 3" ;
    }
}