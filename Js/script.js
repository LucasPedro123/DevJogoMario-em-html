const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const botao = botao.classList


const jump = () => {
    mario.classList.add('jump');
}
mario.addEventListener('keydown' , jump);



const loop = setInterval(()=> {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <=60){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${pipePosition}px`

        mario.src = 'Imagens/game-over.png'
        mario.style.width = '70px'
        mario.style.marginLeft = '90px'
    }
} , 10);
