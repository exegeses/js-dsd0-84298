function duplicar( numero )
{
    let resultado = numero * 2
    return resultado
}
function multiplicar( n1, n2 )
{
    return n1 * n2
}

function mostrarNumero( numero )
{
    console.log( 'Numero:', numero )
}

mostrarNumero( 5 )
// duplicar(10)
mostrarNumero( duplicar(10) )
console.log('------')
multiplicar(2,3)
console.log('------')
mostrarNumero( multiplicar(4, 5) )

//mostrarNumero( duplicar )
/* explicación callback */
let n = 0
function incrementar(){
    console.log(n++)
}


