document.querySelector('#btnCalEj18').addEventListener('click', calcular);

function calcular(){
    let num = Number(document.querySelector('#nmbEj18').value);
    let result = '';
    for (let i = 31; i < 200; i++) {
        if (i % num == 0 && i % 2 == 0) {
            result += i + '<br>'
        }
    }
    

     document.querySelector('#pResulEj18').innerHTML = result
}