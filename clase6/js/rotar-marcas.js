const marcas = [
    'Hermès','Zara','Boss',
    'Aeropostale','Kingin','Tomy',
    'Gola', 'Abercrombie', 'JCrew',
    'H&M', 'Hollister', 'Luis Vuiton',
    'Gucci', 'Adidas', 'Fuarck',
    'Lacoste'
   ]
// Ubicar elementos dentro del dom
const rotador = document.querySelector('#rotador') 
  const anterior = rotador.children[0]
  const span = rotador.children[1]
  const siguiente = rotador.children[2]

// Estado inicial
let indice = 3
span.textContent = marcas[indice]

siguiente.addEventListener(
        'click',
        () => 
            {
                indice++
                if( indice == marcas.length ){
                    indice = 0
                }
                span.textContent = marcas[indice]
            }   
)
anterior.addEventListener(
    'click',
    () => 
        {
            indice--
            if( indice < 0 ){
                indice = marcas.length - 1
            }
            span.textContent = marcas[indice]
        }
)