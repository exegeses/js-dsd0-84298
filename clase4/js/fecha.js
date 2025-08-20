/*
    Mostrar la fecha actual
    formato: diasemana dd de mes de 2025
             Miércoles 20 de agosto de 2025
*/
const cajaTexto = document.querySelector('#cajaTexto')

// Creamos objeto de fecha
const fecha = new Date()

// Obtenemos el número de día de la semana
let diaSemana = fecha.getDay()
console.log(diaSemana)
/*
    0 -> Domingo
    1 -> Lunes
    2 -> Martes
    3 -> Miércoles
    4 -> Jueves
*/
switch( diaSemana ){
    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Lunes'
        break
    case 2:
        diaSemana = 'Martes'
        break
    case 3:
        diaSemana = 'Miércoles'
        break
    case 4:
        diaSemana = 'Jueves'
        break
    case 5:
        diaSemana = 'Viernes'
        break
    default:
        diaSemana = 'Sábado'
        break
}
console.log(diaSemana)
let diaMes = fecha.getDate()

cajaTexto.textContent = `${diaSemana} ${diaMes}`