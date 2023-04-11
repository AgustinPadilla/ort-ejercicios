document.querySelector("#btnCalcularEj9").addEventListener('click',calcular);
function calcular(){
    let temp = document.querySelector("#nmbTempEj9").value;
    let dia = document.querySelector("#txtDiaEj9").value;
    let vestimenta;
    let actividad = "Ir al trabajo";
    if(temp < 10){
        vestimenta = "Abrigarse mucho"
    } else if (temp > 20){
        vestimenta = "Ponerse ropa comoda"
    } else {
        vestimenta = "Abrigo moderado"
    }
    if(dia == "domingo" || dia == "Domingo"){
        actividad = "Quedarse en casa, hoy no trabaja"
    }

    document.querySelector("#pResultadoEj9").innerHTML = `Levantarse <br> ${vestimenta} <br> ${actividad}`
}