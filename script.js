const botaoPlayPause = document.getElementById('play-pause-bt')
const faixaMusica = document.getElementById('faixa-musica')
const btAvancar = document.getElementById('next-bt')
const btVoltar = document.getElementById('previous-bt')
const nomeMusica = document.querySelector('.song-name')
const nomeMusicaLetra = document.querySelector('.song-name-lyrics')
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
    nomeMusicaAtual()
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
    nomeMusicaAtual()
    taTocando = 1
    botaoPlayPause.setAttribute('src', 'icons/Pause Icon.png')
}

const nomeTodasMusicas = ['SOS', 'Kill Bill', 'Seek & Destroy', 'Low', 'Love Language', 'Blind', 'Used', 'Snooze', 'Notice Me', 'Gone Girl', 'Smoking on my Ex Pack', 'Ghost in the Machine', 'F2F', 'Nobody Gets Me', 'Conceited', 'Special', 'Too Late', 'Far', 'Shirt', 'Open Arms', 'I Hate U', 'Good Days', 'Forgiveless']

function nomeMusicaAtual() {
    if (faixaAtual === 1) {
        nomeMusica.textContent = 'SOS'
        nomeMusicaLetra.textContent = 'SOS'
    } if (faixaAtual === 2) {
        nomeMusica.textContent = 'Kill Bill'
        nomeMusicaLetra.textContent = 'Kill Bill'
    } if (faixaAtual === 3) {
        nomeMusica.textContent = 'Seek & Destroy'
        nomeMusicaLetra.textContent = 'Seek & Destroy'
    } if (faixaAtual === 4) {
        nomeMusica.textContent = 'Low'
        nomeMusicaLetra.textContent = 'Low'
    } if (faixaAtual === 5) {
        nomeMusica.textContent = 'Love Language'
        nomeMusicaLetra.textContent = 'Love Language'
    } if (faixaAtual === 6) {
        nomeMusica.textContent = 'Blind'
        nomeMusicaLetra.textContent = 'Blind'
    } if (faixaAtual === 7) {
        nomeMusica.textContent = 'Used'
        nomeMusicaLetra.textContent = 'Used'
    } if (faixaAtual === 8) {
        nomeMusica.textContent = 'Snooze'
        nomeMusicaLetra.textContent = 'Snooze'
    } if (faixaAtual === 9) {
        nomeMusica.textContent = 'Notice Me'
        nomeMusicaLetra.textContent = 'Notice Me'
    } if (faixaAtual === 10) {
        nomeMusica.textContent = 'Gone Girl'
        nomeMusicaLetra.textContent = 'Gone Girl'
    } if (faixaAtual === 11) {
        nomeMusica.textContent = 'Smoking on my Ex Pack'
        nomeMusicaLetra.textContent = 'Smoking on my Ex Pack'
    } if (faixaAtual === 12) {
        nomeMusica.textContent = 'Ghost in the Machine'
        nomeMusicaLetra.textContent = 'Ghost in the Machine'
    } if (faixaAtual === 13) {
        nomeMusica.textContent = 'F2F'
        nomeMusicaLetra.textContent = 'F2F'
    } if (faixaAtual === 14) {
        nomeMusica.textContent = 'Nobody Gets Me'
        nomeMusicaLetra.textContent = 'Nobody Gets Me'
    } if (faixaAtual === 15) {
        nomeMusica.textContent = 'Conceited'
        nomeMusicaLetra.textContent = 'Conceited'
    } if (faixaAtual === 16) {
        nomeMusica.textContent = 'Special'
        nomeMusicaLetra.textContent = 'Special'
    } if (faixaAtual === 17) {
        nomeMusica.textContent = 'Too Late'
        nomeMusicaLetra.textContent = 'Too Late'
    } if (faixaAtual === 18) {
        nomeMusica.textContent = 'Far'
        nomeMusicaLetra.textContent = 'Far'
    } if (faixaAtual === 19) {
        nomeMusica.textContent = 'Shirt'
        nomeMusicaLetra.textContent = 'Shirt'
    } if (faixaAtual === 20) {
        nomeMusica.textContent = 'Open Arms'
        nomeMusicaLetra.textContent = 'Open Arms'
    } if (faixaAtual === 21) {
        nomeMusica.textContent = 'I Hate U'
        nomeMusicaLetra.textContent = 'I Hate U'
    } if (faixaAtual === 22) {
        nomeMusica.textContent = 'Good Days'
        nomeMusicaLetra.textContent = 'Good Days'
    } if (faixaAtual === 23) {
        nomeMusica.textContent = 'Forgiveless'
        nomeMusicaLetra.textContent = 'Forgiveless'
    } 
}

botaoPlayPause.addEventListener('click', tocarOuPausar)
btAvancar.addEventListener('click', proximaFaixa)
btVoltar.addEventListener('click', voltarFaixa)