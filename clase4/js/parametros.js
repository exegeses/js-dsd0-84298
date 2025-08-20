/*
    Un parámetro completa el sentido de una función
    Cuándo enviamos un parámetro a una función, 
    este dato puede ser procesado para 
    personalizar levemento lo que hace nuestra función
*/

// declaración
function saludar( nombrePersona )
{
    console.log('hola', nombrePersona)
}

// invocación
saludar('Rick')
saludar('Morty')
saludar('Summer')

function duplicarNumero( numero )
{
    let resultado = numero * 2
    console.log('resultado:', resultado)
}

duplicarNumero( 10 )
duplicarNumero( 0 )
duplicarNumero( 'manzana' )
