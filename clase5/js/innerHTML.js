// Ubicamos elementos del DOM
/* 
const botones = document.querySelector('#botones')
const boton = botones.children[0]
*/
const boton = document.querySelector('#botones a')

/*
const parrafos = document.querySelector('#parrafos') 
   const primero = parrafos.children[0]
   const segundo = parrafos.children[1]
   const tercero = parrafos.children[2]
*/
const parrafos = document.querySelectorAll('#parrafos p')
  const primero = parrafos[0]
  const segundo = parrafos[1]
  const tercero = parrafos[2]

const contenido = '<h2> es un enunciado de nivel dos <img src="imgs/moon.png"></h2>'  

primero.textContent = contenido
segundo.innerText = contenido
tercero.innerHTML = contenido