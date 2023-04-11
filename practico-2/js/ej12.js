document.querySelector("#btnCalcularEj12").addEventListener("click", calcular);
function calcular(){
    let caracter = document.querySelector("#txtCaracterEj12").value;
    if (caracter == "a" ||caracter == "e" ||caracter == "i" ||caracter == "o" ||caracter == "u" || 
        caracter == "A" ||caracter == "E" ||caracter == "U" ||caracter == "O" ||caracter == "U"){
        document.querySelector("#pResultadoEj12").innerHTML ="Es vocal" ;
    } else {
        document.querySelector("#pResultadoEj12").innerHTML ="No es vocal" ;
    }
}