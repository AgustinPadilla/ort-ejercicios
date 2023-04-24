document.querySelector('#btnCalEj16').addEventListener('click', calcular);

function calcular(){
    let num1 = Number(document.querySelector('#nmb1Ej16').value);
    let num2 = Number(document.querySelector('#nmb2Ej16').value);
    let result = ''

    for (let i = num1; i <= num2; i++) {
        if(i % 4 == 0 && i % 6 == 0){
            result = i;
            i = num2
        }
    }

     document.querySelector('#pResulEj16').innerHTML = result
}