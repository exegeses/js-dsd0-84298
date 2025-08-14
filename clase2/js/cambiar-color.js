// Ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja')

caja.textContent = 'Gris'

// declaramos funcioness de control
function cajaAzul()
{
    caja.textContent = 'Azul'
    caja.style.backgroundColor='hsl(230, 60%, 64%)'
    caja.style.rotate = '-24deg'
}
function cajaVerde()
{
    caja.textContent = 'Verde'
    caja.style.backgroundColor='hsl(120, 60%, 60%)'
    caja.style.rotate = '30deg'
}
function cajaRosa()
{
    caja.textContent = 'Rosa'
    caja.style.backgroundColor='hsl(310, 100%, 80%)'
    caja.style.rotate = '-40deg'
}

