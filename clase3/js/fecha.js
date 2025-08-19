// Ubicamos elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')
/*
    Mostrar la fecha actual
    formato:   dd/mm/yyyy    19/08/2025
*/

// Creamos un objeto de fecha  Date()
const fecha = new Date()

// obtenemos el número del día de mes actual
let diaMes = fecha.getDate()
console.log('dia:', diaMes)

// Obtenemos el número de mes actual
let mes = fecha.getMonth() + 1
if( mes < 10 ){
    mes = '0'+ mes
}
console.log('mes:', mes)

// Obtenemos el número de año
let anio = fecha.getFullYear()
console.log('año:', anio)

// esscribimos dentro del span
// cajaTexto.textContent = diaMes +'/'+ mes +'/'+ anio
cajaTexto.textContent = `${diaMes}/${mes}/${anio}`