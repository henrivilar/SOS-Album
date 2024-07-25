const botaoPlayPause = document.getElementById('play-pause-bt')
const faixaMusica = document.getElementById('faixa-musica')
const btAvancar = document.getElementById('next-bt')
const btVoltar = document.getElementById('previous-bt')

const numeroMusicas = 23
let taTocando = 0
let faixaAtual = 1

function tocarFaixa() {
    faixaMusica.play()
}

function pausarFaixa() {
    faixaMusica.pause()
}

function tocarOuPausar () {
    if (taTocando === 0) {
        tocarFaixa()
        taTocando = 1
    } else {
        pausarFaixa()
        taTocando = 0
    }
}

function proximaFaixa () {
    if (faixaAtual === numeroMusicas) {
        faixaAtual = 1
    } else {
        faixaAtual += 1
    }
    
    faixaMusica.src = "songs/" + faixaAtual + ".mp3"
    tocarFaixa()
    taTocando = 1
}

function voltarFaixa () {
    if (faixaAtual === 1) {
        faixaAtual = numeroMusicas
    } else {
        faixaAtual -= 1
    }
    
    faixaMusica.src = "songs/" + faixaAtual + ".mp3"
    tocarFaixa()
    taTocando = 1
}

botaoPlayPause.addEventListener('click', tocarOuPausar)
btAvancar.addEventListener('click', proximaFaixa)
btVoltar.addEventListener('click', voltarFaixa)