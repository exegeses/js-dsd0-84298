const tema = document.querySelector('#tema')
const boton = document.querySelector('#switcher figure')


/* // gonza
let estadoBoton = true
boton.onclick = function () {
    if(estadoBoton) {
        tema.href = 'css/light.css'
        estadoBoton = false
    }
    else {
        tema.href = 'css/dark.css'
        estadoBoton = true
    }
}
*/
/*
// Santi
let tocado = true
boton.onclick = function()
{
    if (tocado == false) 
    {
        tema.href = "css/dark.css"
        tocado = true
    }else if(tocado == true)
    {
        tema.href = "css/light.css"
        tocado = false
    }
}
*/
// Pris
boton.onclick = function()
{
    if(tema.href.includes('css/light.css')){
        tema.href = 'css/dark.css'
    } else {
        tema.href = 'css/light.css'
    }
}

