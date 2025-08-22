const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');

function getNumero()
{
    let numeroRandom = Math.random();
    let numero = Math.round(numeroRandom * 5 + 1);
    return numero;
}
function playAudio(){
    let audio = new Audio('audio/dice.mp3');
    audio.play();
}
boton.addEventListener(
    'click',
    () =>
    {
        playAudio();
        numero = getNumero();
        console.log(numero);
        caja.innerHTML = `<img src="red/dice-${numero}.png">`;
    }
);