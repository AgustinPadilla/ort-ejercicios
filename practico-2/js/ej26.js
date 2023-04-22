document.querySelector('#btnCalcularEj26').addEventListener('click', calcular);

function calcular(){
    let noches = Number(document.querySelector('#nmbNochesEj26').value)
    let medio = document.querySelector('#txtMedioEj26').value
    let nochesRegalo = 0;

    if(noches >= 3){
        nochesRegalo ++
    }
    if(noches >= 7){
        nochesRegalo ++
        if(medio == 't'){
            nochesRegalo ++
        }
    }
    let totalNoches = nochesRegalo + noches;
    document.querySelector('#pResultadoEj26').innerHTML = `Hay ${nochesRegalo} noches de regalo, el usuario se hospeda ${totalNoches} noches, el costo total son ${noches*40}`
}