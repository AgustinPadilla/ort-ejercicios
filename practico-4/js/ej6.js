document.querySelector('#btnEj6').addEventListener('click',calcular);

function calcular(){
    celsius = Number(document.querySelector('#nmb1Ej6').value);
    document.querySelector('#pRetEj6').innerHTML ='La temperatura en Farenheit es:' + aFarenheit(celsius);
}

function aFarenheit(celsius) { 
    return 1.8*celsius+32
 }