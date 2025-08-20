const cajaTexto = document.querySelector('#cajaTexto')
// nav
const botones = document.querySelector('#botones')
console.log(botones)
const btnUno = botones.children[0]
const btnDos = botones.children[1]
const btnTres = botones.children[2]

cajaTexto.textContent = 'ningún botón pulsado'

btnUno.onclick = function()
                    {
                        cajaTexto.textContent = 'botón uno pulsado'
                    }
btnDos.onclick = function()
                    {
                        cajaTexto.textContent = 'botón dos pulsado'
                    }
btnTres.onclick = function()
                    {
                        cajaTexto.textContent = 'botón tres pulsado'
                    }
