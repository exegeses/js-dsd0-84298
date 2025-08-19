// ámbito o scope
let x = 10
let y = 1721

function foo()
{
    let y = 20
    console.log('dentro de la función:', x)
    console.log('dentro de la función 1:', y)
    console.log('dentro de la función 2:', y)
}



console.log('fuera de la fubnción:', x)
foo()
console.log(y)
