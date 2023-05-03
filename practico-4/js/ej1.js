document.querySelector('#btnEj1').addEventListener('click',calcular);

function calcular(){
    nmb1 = Number(document.querySelector('#nmb1Ej1').value);
    nmb2 = Number(document.querySelector('#nmb2Ej1').value);

    document.querySelector('#pRetEj1').innerHTML = 'Numeros pares: ' + nmbPares(nmb1,nmb2);
}

function nmbPares(n1, n2) { 
    let result = 0;

    for (let i = n1; i <= n2; i++) {
        if (i%2===0) {
            result ++
        }
    }
    return result
 }