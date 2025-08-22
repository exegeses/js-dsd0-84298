/*
    es un tipo de datos (objeto) con una coleccion de elementos
*/
const marcas = [
                'Hermès','Zara','Boss',
                'Aeropostale','Kingin','Tomy',
                'Gola', 'Abercrombie', 'JCrew'
               ]

console.log( typeof(marcas) )
console.log( marcas )
/*--------*/
const cajaTexto = document.querySelector('#cajaTexto')
// cajaTexto.textContent = marcas
cajaTexto.textContent = marcas[2]