document.querySelector('#btnCalEj12').addEventListener('click', calcular);

function calcular(){
    let num = Number(document.querySelector('#nmbEj12').value);
    let fact = 1;
     for (let i = 1; i <= num; i++) {
        fact = fact * i;
     }
     document.querySelector('#pResulEj12').innerHTML = fact
}