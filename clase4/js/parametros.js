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

/*
function duplicarNumero( numero )
{
    let resultado = numero * 2
    console.log('resultado:', resultado)
}*/
/*// Gonza
function duplicarNumero(numero) {
    if ( isNaN(numero) ) {
        console.log("Debe ser un número")
    } else {
        let resultado = numero * 2
        console.log("Resultado:", resultado)
    }
}*/
// Iri
function verificarParametro(valor) {
    if ( isNaN(valor) ) {
      console.log("Debe ser un número");
    } else {
      console.log("Resultado: " + (valor * 2));
    }
  }

  verificarParametro( 10 )
verificarParametro( 0 )
verificarParametro( 'manzana' )
