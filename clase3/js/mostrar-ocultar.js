// Ubicamos elementos dentro del documento (DOM)
const caja = document.querySelector('#caja')
const btnInterruptor = document.querySelector('#btnInterruptor')
/* 
const btnOcultar = document.querySelector('#btnOcultar')
const btnMostrar = document.querySelector('#btnMostrar')

//caja.style.opacity = 0
//caja.style.visibility = 'hidden'
//caja.style.display = 'none'

btnOcultar.onclick = function()
                    {
                        caja.style.opacity = 0
                    }
btnMostrar.onclick = function()
                    {
                        caja.style.opacity = 1
                    }                    
*/
let estadoCaja = true // flag
btnInterruptor.onclick = function()
            {
                if( estadoCaja ){
                    caja.style.opacity = 0
                    estadoCaja = false
                }
                else{
                    caja.style.opacity = 1
                    estadoCaja = true
                }
            }
