// imagen ampliada
const ampliada = document.querySelector('#hero img')
console.log(ampliada)
// miniaturas
const minis = document.querySelectorAll('#minis img')
  const btn1 = minis[0]
  const btn2 = minis[1]
  const btn3 = minis[2]
  const btn4 = minis[3]
  const btn5 = minis[4]
  const btn6 = minis[5]

// función de cambio de imagen
function cambiarHero( imagen )
{
    ampliada.src = `imgs/${imagen}.jpg`
}



// obj.addEventListener('evento', accion)  
btn1.addEventListener(
            'click',
            function()
            {
                //ampliada.src = 'imgs/mike-shinoda.jpg'
                cambiarHero('mike-shinoda')
            }
        )
btn2.addEventListener(
            'click',
            function()
            {
                //ampliada.src = 'imgs/joe-han.jpg'
                cambiarHero('joe-han')
            }
        )
btn3.addEventListener(
            'click',
            function()
            {
                //ampliada.src = 'imgs/chester-benington.jpg'
                cambiarHero('chester-benington')
            }
        )
btn4.addEventListener(
            'click',
            function()
            {
                //ampliada.src = 'imgs/brad-delson.jpg'
                cambiarHero('brad-delson')
            }
        )
btn5.addEventListener(
            'click',
            function()
            {
                //ampliada.src = 'imgs/rob-bourdon.jpg'
                cambiarHero('rob-bourdon')
            }
        )
btn6.addEventListener(
            'click',
            function()
            {
                //ampliada.src = 'imgs/dave-phoenix-farrell.jpg'
                cambiarHero('dave-phoenix-farrell')
            }
        )
