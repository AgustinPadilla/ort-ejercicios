let arrEj8 = [1, 1]

for (let i = 2; i <= 20; i++) {
    ultimo = arrEj8[i - 1]
    penultimo = arrEj8[i - 2]
    arrEj8[i] = ultimo + penultimo
}
let result = ''
for (let i = 0; i < arrEj8.length; i++) {
    result += arrEj8[i] + '<br>';
}
document.querySelector('#pResultEj8').innerHTML = result