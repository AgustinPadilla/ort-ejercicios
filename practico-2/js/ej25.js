let stock;
let pedidoMax = 0;
let nomPedMax;
let contPedidos = 0;
document.querySelector('#btnInStockEj25').removeAttribute('disabled')

document.querySelector('#btnInStockEj25').addEventListener('click', inStock);

function inStock() {
    stock = Number(document.querySelector('#nmbStockEj25').value);
    console.log(stock)
    document.querySelector('#pStockEj25').innerHTML = 'Stock Total: ' + stock;
    document.querySelector('#btnInStockEj25').setAttribute('disabled', true)
}

document.querySelector('#btnComprarEj25').addEventListener('click', comprar);
function comprar() {
    let nombre = document.querySelector('#txtNombreEj25').value;
    let pedido = Number(document.querySelector('#nmbPedidoEj25').value);

    if (stock < pedido) {
        document.querySelector('#pResultadoEj25').innerHTML = 'ERROR - El pedido no puede ser mayor al stock'
    } else {
        contPedidos ++
        stock -= pedido;
        document.querySelector('#pStockEj25').innerHTML = 'Stock Total: ' + stock;
        if (pedido > pedidoMax){
            nomPedMax = nombre;
        }
    }
    if (stock == 0) {
        document.querySelector('#pResultadoEj25').innerHTML = 'Sin Stock - Cantidad de pedidos: '+contPedidos+' Mayor pedido: '+nomPedMax;
        document.querySelector('#btnInStockEj25').setAttribute('disabled', true)
    }
        
}