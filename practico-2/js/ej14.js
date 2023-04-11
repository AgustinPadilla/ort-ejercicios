document.querySelector("#btnCalcularEj14").addEventListener("click", calcular);
function calcular(){
    let millas = Number(document.querySelector("#nmbMillasEj14").value);
    let plan = document.querySelector("#txtPlanEj14").value;
    let viaje;
    if(plan == "s"){
        millas = millas * 2;
    }
    console.log(millas)
    if(millas >= 60000){
        viaje = "60.000 millas - Europa (destino lejano)"
    } else if(millas >= 30000) {
        viaje = "30.000 millas - América del Norte (destino intermedio)"
    } else if(millas >= 15000){
        viaje = "15.000 millas — América del Sur (destino cercano)"
    } else {
        viaje = "no tiene suficientes millas"
    }
    document.querySelector("#pResultadoEj14").innerHTML = viaje;
}