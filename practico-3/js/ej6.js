let numerosEj6 = '';
for (let i = -33; i <= 230; i++) {
    if(i % 4 == 0){
        numerosEj6 += i + '<br>' 
    }
}
document.querySelector('#pNumerosEj6').innerHTML = numerosEj6;