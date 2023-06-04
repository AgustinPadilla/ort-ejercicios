let arrEj9 = [1, 1]

for (let i = 2; i <= 20; i++) {
    ultimo = arrEj9[i - 1]
    penultimo = arrEj9[i - 2]
    if (ultimo <= 1000) {
        arrEj9[i] = ultimo + penultimo
    }else{
        break
    }
}
let result9 = ''
for (let i = 0; i < arrEj9.length; i++) {
    result9 += arrEj9[i] + '<br>';
}
document.querySelector('#pResultEj9').innerHTML = result9