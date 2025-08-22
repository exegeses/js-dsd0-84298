//const botones = document.querySelectorAll('#botones a')
const boton = document.querySelector('#botones a')
const cajaTexto = document.querySelector('#cajaTexto')
/*
    Al pulsar el botón vamos a generar un número aleatorio. 
    Este número deberá ser un entero entre 1 y 10 (incluidos)
    Mostrar este número en el span
*/
function generarRandom()
{
    // Math Qué es un objeto con atributos y métodos de cálculos aritméticos
        //.random()  
        // Devuelve un número semialeatorio entre 0~1
            // con decimales
            // 0 (incluído) ~ 1 (exclído)
    /*let aleatorio = Math.random()
    let numero1a10 = (aleatorio * 10) + 1
    let numero = Math.trunc(numero1a10) */
    let numero = Math.trunc( Math.random()*10 + 1 )
    return numero
}
boton.onclick = ()=>{
                    let n = generarRandom()
                    cajaTexto.textContent = n
                }

/* ()=>   function()  */                