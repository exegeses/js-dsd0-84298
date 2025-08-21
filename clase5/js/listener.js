const cajaTexto = document.querySelector('#cajaTexto')
const botones = document.querySelectorAll('#botones a')
 const btnUno = botones[0]
 const btnDos = botones[1]

btnUno.onclick = function()
                {
                    cajaTexto.textContent = 'chick botón uno'
                }
// sobreescritura                
btnUno.onclick = function()
                {
                    alert('chick botón uno')
                }
                
btnDos.addEventListener(
                    'click', 
                    function()
                    {
                        cajaTexto.textContent = 'chick botón dos'
                    }
        )                
btnDos.addEventListener(
                    'click', 
                    function()
                    {
                        alert('chick botón dos')
                    }
        )                
