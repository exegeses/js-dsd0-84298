let numero = 20

if( numero < 10 ){
    console.log('es menor')
}
else{
    console.log('no es menor')
}

/*
    (condicion)  true   false

    (condicion) ? true : false

*/

    (numero < 10) ? console.log('es menor') : console.log('no es menor')

console.log('-------------')    

let deudor = false;
if( deudor ){
    console.log('registra deuda')
}

console.log('-------------')    

/* let color = ''
if( deudor ){
    color = 'rojo'
}
else{
    color = 'verde'
}*/

let color = (deudor) ? 'rojo' : 'verde'
