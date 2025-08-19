// Ubicamos elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')
const btn = document.querySelector('#btn')

// control
btn.onclick = function()
                {
                    cajaTexto.textContent = 'hiciste click!'
                }
btn.onmouseover = function()
                {
                    cajaTexto.textContent = 'mouse sobre'
                }
btn.onmouseout = function()
                {
                    cajaTexto.textContent = 'reposo'
                }                
                