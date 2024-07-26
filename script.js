const botaoPlayPause = document.getElementById('play-pause-bt')
const faixaMusica = document.getElementById('faixa-musica')
const btAvancar = document.getElementById('next-bt')
const btVoltar = document.getElementById('previous-bt')
const nomeMusica = document.querySelector('song-name')
const letraMusica = document.getElementById('song-lyric')

const numeroMusicas = 23
let taTocando = 0
let faixaAtual = 1

function tocarFaixa() {
    faixaMusica.play()
    botaoPlayPause.addEventListener('click', function () {
        botaoPlayPause.setAttribute('src', 'icons/Play Icon.png')
    })
}

function pausarFaixa() {
    faixaMusica.pause()
    botaoPlayPause.addEventListener('click', function () {
        botaoPlayPause.setAttribute('src', 'icons/Pause Icon.png')
    })
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
    botaoPlayPause.setAttribute('src', 'icons/Pause Icon.png')
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
    botaoPlayPause.setAttribute('src', 'icons/Pause Icon.png')
}

const nomeTodasMusicas = ['SOS', 'Kill Bill', 'Seek & Destroy', 'Low', 'Love Language', 'Blind', 'Used', 'Snooze', 'Notice Me', 'Gone Girl', 'Smoking on my Ex Pack', 'Ghost in the Machine', 'F2F', 'Nobody Gets Me', 'Conceited', 'Special', 'Too Late', 'Far', 'Shirt', 'Open Arms', 'I Hate U', 'Good Days', 'Forgiveless']

const letrasTodasMusicas = []

botaoPlayPause.addEventListener('click', tocarOuPausar)
btAvancar.addEventListener('click', proximaFaixa)
btVoltar.addEventListener('click', voltarFaixa)