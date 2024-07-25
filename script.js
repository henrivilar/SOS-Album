const botaoPlayPause = document.getElementById('play-pause-bt')
const faixaMusica = document.getElementById('faixa-musica')

const numeroMusicas = 23
let taTocando = 0

function tocarFaixa() {
    faixaMusica.play()
}

function pausarFaixa() {
    faixaMusica.pause()
}

function tocarOuPausar () {
    if (taTocando === 0) {
        tocarFaixa()
    } else {
        pausarFaixa()
    }
}

botaoPlayPause.addEventListener('click', tocarOuPausar)