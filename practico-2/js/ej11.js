document.querySelector("#btnCalcularEj11").addEventListener("click", calcular);
function calcular(){
    let valor1 = Number(document.querySelector("#nmbValor1Ej11").value);
    let valor2 = Number(document.querySelector("#nmbValor2Ej11").value);
    let operacion = document.querySelector("#txtOperacionEj11").value;
    if (operacion == "S"){
        document.querySelector("#pResultadoEj11").innerHTML = valor1 + valor2;
    }
    if (operacion == "R"){
        document.querySelector("#pResultadoEj11").innerHTML = valor1 - valor2;
    }
    if (operacion == "M"){
        document.querySelector("#pResultadoEj11").innerHTML = valor1 * valor2;
    }
    if (operacion == "D"){
        document.querySelector("#pResultadoEj11").innerHTML = valor1 / valor2;
    }
}