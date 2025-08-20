// Ubicamos elementos dentro del DOM
  // botones
const botones = document.querySelector('#botones')
  const btnMclaren  = botones.children[0] 
  const btnRedbull  = botones.children[1] 
  const btnFerrari  = botones.children[2] 
  const btnMercedes = botones.children[3] 
  const btnAmartin  = botones.children[4] 
  // escuderías
const mclaren = document.querySelector('#mclaren')
const redbull = document.querySelector('#redbull')
const ferrari = document.querySelector('#ferrari')
const mercedes = document.querySelector('#mercedes')
const amartin = document.querySelector('#amartin')  

/*
    estado inicial
    Tenemos que hacer que sólo se vea la información de una única escudería
    Vamos a ocultar todas las demás
*/
redbull.style.display = 'none'
ferrari.style.display = 'none'
mercedes.style.display = 'none'
amartin.style.display = 'none'

// eventos
btnMclaren.onclick = function()
        {
            mclaren.style.display = 'flex'
            redbull.style.display = 'none'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'
        }
btnRedbull.onclick = function()
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'flex'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'
        }
btnFerrari.onclick = function()
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'none'
            ferrari.style.display = 'flex'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'
        }
btnMercedes.onclick = function()
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'none'
            ferrari.style.display = 'none'
            mercedes.style.display = 'flex'
            amartin.style.display = 'none'
        }
btnAmartin.onclick = function()
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'none'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'flex'
        }
