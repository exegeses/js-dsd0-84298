const cajaTexto = document.querySelector('#cajaTexto') 
/*
    Mostrar un reloj digital
    formato:   hh:mm:ss     15:29:42
*/
// Declaramos funciones de control
function reloj()
{
    // Creamos objeto de fecha
    const fecha = new Date()

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
    if(horas < 10){
            horas = '0'+ horas
    }

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    if(minutos < 10){
            minutos = '0'+ minutos
    }

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    if(segundos < 10){
            segundos = '0'+ segundos
    }

    // Mostramos el reloj
    cajaTexto.textContent = `${horas}:${minutos}:${segundos}`
}

reloj()
setInterval( reloj, 1000 )