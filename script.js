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
        letraMusica.innerHTML = `Give me a second, give me a minute<br>
                    Nah, lil' bitch, can't let you finish<br>
                    And that's right I need commissions on mine<br>
                    All that sauce you got from me<br>
                    All that shit I gave for free<br>
                    And I want it back, want it back<br>
                    This ain't no warnin' shot<br>
                    'Case all you hoes forgot<br>
                    Know you been more than lost<br>
                    But that don't mean I'm so<br>
                    Comin' like I'm so greasy<br>
                    Ex nigga, he so needy<br>
                    Punk ass tried to replace me, but the stakes is too high<br>
                    They can't survive off mini-me's<br>
                    I'm talkin' pedigree<br>
                    Ain't no writers, that's just me<br>
                    Ain't no spiteful, I'm just tea<br>
                    Can't hate a bitch for free<br>
                    Talkin' I'm off the bench like Brady<br>
                    I'm pressin' niggas like KD, it's up<br>
                    Yeah, nigga, it's up to me<br>
                    Remind you of Della Reese<br>
                    So classic, that ass so fat, it look natural, it's not<br>
                    I talk bullshit a lot<br>
                    No more fuck shit, I'm done<br>
                    Damn right, I'm the one<br>
                    Damn right, I'm the one<br>
                    Comin' back, she so candid<br>
                    Comin' back snatched like bandit<br>
                    Comin' back this ain't cancer, I'm organic with my<br>
                    Fresh squeeze, I'm dumping like press squeeze<br>
                    I'm horny like, "Suck these", so daring like, "Touch me"<br>
                    And all the petty shit aside<br>
                    All the phony shit aside<br>
                    I just want what's mine<br>
                    Mine, oh<br>
                    I just want what's mine<br>
                    This ain't no warnin' shot<br>
                    'Case all you hoes forgot<br>
                    And I cried, and cried<br>
                    Said what's on my mind<br>
                    Ooh, ooh-whoa, I cried`
    } if (faixaAtual === 2) {
        nomeMusica.textContent = 'Kill Bill'
        nomeMusicaLetra.textContent = 'Kill Bill'
        letraMusica.innerHTML = `I'm still a fan even though I was salty<br>
                    Hate to see you with some other broad, know you happy<br>
                    Hate to see you happy if I'm not the one driving<br>
                    I'm so mature, I'm so mature<br>
                    I'm so mature, I got me a therapist to tell me there's other men<br>
                    I don't want none, I just want you<br>
                    If I can't have you, no one should<br>
                    I might<br>
                    I might kill my ex, not the best idea<br>
                    His new girlfriend's next, how'd I get here?<br>
                    I might kill my ex, I still love him though<br>
                    Rather be in jail than alone<br>
                    I get the sense that it's a lost cause<br>
                    I get the sense that you might really love her<br>
                    The text gon' be evidence, this text is evidence<br>
                    I tried to ration with you, no murders or crimes of passion, but damn<br>
                    You was out of reach<br>
                    You was at the farmer's market with your perfect peach<br>
                    Now I'm in the basement, planning home invasion<br>
                    Now you laying face-down, got me singing over a beat<br>
                    I'm so mature, I'm so mature<br>
                    I'm so mature, I got me a therapist to tell me there's other men<br>
                    I don't want none, I just want you<br>
                    If I can't have you, no one will<br>
                    (I might)<br>
                    I might kill my ex, not the best idea<br>
                    His new girlfriend's next, how'd I get here?<br>
                    I might kill my ex, I still love him though<br>
                    Rather be in jail than alone<br>
                    I did it all for love (love)<br>
                    I did it all on no drugs (drugs)<br>
                    I did all of this sober<br>
                    I did it all for us, oh<br>
                    I did it all for love (love)<br>
                    I did it all of this on no drugs (drugs)<br>
                    I did all of this sober<br>
                    Don't you know I did it all for us? (I'll kill your ass tonight)<br>
                    Uh, I just killed my ex (my ex)<br>
                    Not the best idea (idea)<br>
                    Killed his girlfriend next, how'd I get here?<br>
                    I just killed my ex (my ex)<br>
                    I still love him, though (I do)<br>
                    Rather be in Hell than alone`
    } if (faixaAtual === 3) {
        nomeMusica.textContent = 'Seek & Destroy'
        nomeMusicaLetra.textContent = 'Seek & Destroy'
        letraMusica.innerHTML = `You push me past my own capacity, boy<br>
                    Permission to crash, collecting damages, boy<br>
                    No reaching and grabbing for more clarity now<br>
                    Seek and destroy, all missiles deployed<br>
                    Do it to you<br>
                    Do it to you<br>
                    I had to do it to you<br>
                    Do it to you, oh-oh-oh<br>
                    Don't make me do it to you<br>
                    Do it to you<br>
                    Do it to you<br>
                    I hate to do it to you, oh<br>
                    Do what I gotta do (oh-ah-ah-ah-ah)<br>
                    I can't stand it, the urge is so demanding<br>
                    The purge, so necessary<br>
                    The art of war, goddamnit, I'm drained<br>
                    Now that I ruin everything, I cannot complain<br>
                    Now that I've ruined everything, I'm so fucking free<br>
                    Now that I've ruined everything, keep it all for me<br>
                    Now that I've ruined everything, space is all I need<br>
                    Do it to you<br>
                    Do it to you<br>
                    I had to do it to you<br>
                    Do it to you, oh-oh-oh<br>
                    Don't make me do it to you<br>
                    Do it to you<br>
                    Do it to you<br>
                    I hate to do it to you, oh<br>
                    Do what I gotta do (oh-ah-ah-ah-ah)<br>
                    Chasing fat ass and fake connections<br>
                    Chasing facades in all directions<br>
                    Chances are I've got no direction<br>
                    Begging my angels for protection<br>
                    Danger arise and I deflect it<br>
                    New dick arrives and I erect it<br>
                    Begging my angels for protection<br>
                    Thanking my stars living reckless<br>
                    Oh-oh-oh-oh-oh<br>
                    Do it to you<br>
                    Do it to you<br>
                    I had to do it to you<br>
                    Do it to you, oh-oh-oh<br>
                    Don't make me do it to you<br>
                    Do it to you<br>
                    Do it to you<br>
                    I hate to do it to you, oh<br>
                    Do what I gotta do (oh-ah-ah-ah-ah)<br>
                    All the pain I know<br>
                    Is used to fuel my soul<br>
                    No control<br>
                    I do it to you, do it to you, oh<br>
                    All the hurt I know<br>
                    Is used to heal my soul<br>
                    No control<br>
                    I do it to you, do it to you, oh`
    } if (faixaAtual === 4) {
        nomeMusica.textContent = 'Low'
        nomeMusicaLetra.textContent = 'Low'
        letraMusica.innerHTML = `Tell 'em to shoot<br>
                    I'm out the loop, I'm outta range<br>
                    Oh-yeah, I stay out the way-ay-ay!<br>
                    Got another side of me, I like to get it poppin'<br>
                    But these bitches in my business got me outchea choosin' violence<br>
                    If you see me out in public, you don't know me, keep it silent<br>
                    In the bedroom, I be screamin', but outside, I keep it quiet<br>
                    Keep it on the lowski, I'm the lowest of the lowest<br>
                    Wanna see if you can keep it like nobody knows shit<br>
                    I need you to get the fuck out of my space (yeah)<br>
                    Replacement's on the way, please don't play<br>
                    That pussy's feelin' like a great escape (oh, oh)<br>
                    Don't need no trick, old dogs don't change<br>
                    I'm fuckin', I ain't makin' love no more (pussy)<br>
                    You got a new bitch, what the fuck you cryin' for?<br>
                    I'm movin' selfish, callin' all my favorite hoes<br>
                    You know how to reach me every time and it plays in your mind<br>
                    With a rush that feels like, we committin' a crime<br>
                    You know where you belong, I'm gon' save you a spot<br>
                    But we can't be outside 'cause the block is too hot<br>
                    And I'm all on your mind<br>
                    Wherever you are, don't call me! (Let's go)<br>
                    Got another side of me, I like to get it poppin' (alright)<br>
                    But these bitches in my business got me outchea choosin' violence (yeah, yeah)<br>
                    If you see me out in public, you don't know me, keep it silent (okay)<br>
                    In the bedroom, I be screamin', but outside, I keep it quiet<br>
                    Keep it on the lowski, I'm the lowest of the lowest<br>
                    Wanna see if you can keep it like nobody knows shit (let's–)<br>
                    Keep it on the lowski, I'm the lowest of the lowest<br>
                    Wanna see if you can keep it like nobody know shit (yeah-yeah)<br>
                    I need total confidential private shit (yeah)<br>
                    Don't want no one thinkin' I'm a groupie (it's lit)<br>
                    Time zones change, now we on a first-class trip (straight up)<br>
                    Don't work my nerves, you know I get moody<br>
                    We fuckin', we ain't makin' love no more<br>
                    You talk that talk, but it don't match it with some stroke<br>
                    Wherever you are<br>
                    Whatever you need<br>
                    Don't call me<br>
                    Don't call me!<br>
                    Got another side of me, I like to get it poppin'<br>
                    But these bitches in my business got me outchea choosin' violence (alright)<br>
                    If you see me out in public, you don't know me, keep it silent<br>
                    In the bedroom, I be screamin', but outside, I keep it quiet<br>
                    Keep it on the lowski, I'm the lowest of the lowest<br>
                    Wanna see if you can keep it like nobody know shit<br>
                    Keep it on the lowski, I'm the lowest of the lowest<br>
                    Wanna see if you can keep it like nobody knows shit (let's–)<br>
                    Fuck you, real shit<br>
                    I wasn't even on, fuck you<br>
                    But you tryna make me look stupid<br>
                    I'll slap the dog shit out of you, stop playin' with you`
    } if (faixaAtual === 5) {
        nomeMusica.textContent = 'Love Language'
        nomeMusicaLetra.textContent = 'Love Language'
        letraMusica.innerHTML = `Said, "Patience ain't no virtue with you"<br>
                    I done wasted plenty time pacin' around, hate this coupe<br>
                    You had bitches on the side and let my mind wonder too<br>
                    You relentless, nigga, I don't need rent, nigga<br>
                    Text me like I'm waitin' for you to come lie to me<br>
                    Ruin my day, sayin' shit to hurt me, I can't compete<br>
                    Still on the way, I lay awake if you're not around me<br>
                    I'm so on to you, still gone for you<br>
                    Needin' you to talk to me in your love language<br>
                    Show me, yeah, how to connect to you<br>
                    Help me understand<br>
                    How you speak your love language<br>
                    Bad as I wanna be yours, I can't get with your program<br>
                    Sexin' like a slow jam, stick around 'cause I want to<br>
                    Bad as I wanna keep focus, you remind me I'm imperfect<br>
                    And it sucks to admit<br>
                    Nobody put that purpose in me like you do, still<br>
                    Nobody get that work up out me like you do<br>
                    Nobody get the truth about me quite like you<br>
                    You the definition of my right hand<br>
                    Never mind ridin' backseat when you lead me<br>
                    Talk to me in your love language<br>
                    Show me, yeah, how to connect to you<br>
                    Help me understand<br>
                    How you speak your love language<br>
                    Call me like you can't suppress memories of me<br>
                    Call me like you got confessions queued up<br>
                    Like your last bitch, lookin' chewed up, baby<br>
                    Call me like you don't regret missin' this old thing back<br>
                    Call me<br>
                    You know the difference between me and chickens<br>
                    You don't wanna be, be without me<br>
                    You don't wanna live<br>
                    I don't wanna go, ooh, no<br>
                    I don't wanna be alone, oh<br>
                    All that I know is mirrors inside me<br>
                    They recognize you, please don't deny me`
    } if (faixaAtual === 6) {
        nomeMusica.textContent = 'Blind'
        nomeMusicaLetra.textContent = 'Blind'
        letraMusica.innerHTML = `Niggas want me to get ratchet<br>
                    Niggas want me to attack it<br>
                    Put the hood on, now they callin' me Cassius<br>
                    Raunchy like Bob Saget<br>
                    Greedy, I can't pass it<br>
                    Eatin' everything, nigga, no fasting<br>
                    I don't care how much you knew me in the past tense<br>
                    I ain't no Julia Stiles, this ain't no last dance, way past it<br>
                    Way<br>
                    Fuckin' on my ex 'cause he validate me<br>
                    Fuckin' up a check, I don't want no receipt<br>
                    Might get possessed, let my spirit speak freely<br>
                    Hey, my past can't escape me<br>
                    My pussy precedes me<br>
                    My, my, how the times change<br>
                    I'm still playin' the victim<br>
                    And you still playin' the pick-me<br>
                    It's so embarrassing<br>
                    All of the things I need living inside of me<br>
                    I can't see it<br>
                    It's so embarrassing<br>
                    All of the love I seek living inside of me<br>
                    I can't see, I'm blind<br>
                    Blind, blind<br>
                    Blind, blind<br>
                    Blind, blind<br>
                    Blind, blind<br>
                    Blind, blind<br>
                    You ain't getting your bitch back<br>
                    Calm down, shit could be worse, never say that<br>
                    I don't wanna pipe down, rather get payback<br>
                    Mama told me, "Never shit where you lay at"<br>
                    I don't want righteousness<br>
                    I hurt too much, I lost too much, I lust too much<br>
                    I hit my clutch and vroom<br>
                    Third day, pop out the tomb<br>
                    I like when you pull your gun at the red light<br>
                    I like all that violence, give me dysfunction<br>
                    I like when you come, never stay the whole night<br>
                    Better when you high, never tell me I'm wrong<br>
                    'Cause my past can't escape me<br>
                    My pussy precedes me<br>
                    My, my, how the times change<br>
                    You still talkin' 'bout babies<br>
                    And I'm still taking the Plan B<br>
                    It's so embarrassing<br>
                    All of the things I need living inside of me<br>
                    I can't see it<br>
                    It's so embarrassing<br>
                    All of the love I seek living inside of me<br>
                    I can't see, I'm blind<br>
                    Blind, blind<br>
                    Blind, blind<br>
                    Blind, blind<br>
                    Blind, blind<br>
                    Blind, blind`
    } if (faixaAtual === 7) {
        nomeMusica.textContent = 'Used'
        nomeMusicaLetra.textContent = 'Used'
        letraMusica.innerHTML = `Yes, I've been used to being used like this<br>
                    Ain't no difference, I'm immortalized in my thoughts<br>
                    Praise to the most high for protection<br>
                    Over my most prized possessions<br>
                    Talkin' 'bout my sanity's at a 6.7<br>
                    Handing out poinsettias<br>
                    To my dead homie mothers, prayin' they feel better<br>
                    Might get shit mindin' my business<br>
                    Might get shit sharing my vision<br>
                    Might as well, can't tell if it's even worth<br>
                    Conversation, need a prayer, do it even work?<br>
                    All that's for real is forever<br>
                    Moments stolen taste better<br>
                    I've been ridin', ridin' through this cold world<br>
                    Thought you had another, went and caught up with ol' girl<br>
                    I feel like it's over<br>
                    Something's callin' to get closer<br>
                    I'm out of touch, I need your love, oh, it's a mile away<br>
                    And then you weren't sure, weren't sure, we'll go and hide away<br>
                    I feel like it's over<br>
                    Something callin' to get closer<br>
                    Countin' my blessings twice as much<br>
                    Let death stress me too much<br>
                    Can't hide from pressure, too worried I'm living a lie<br>
                    Can't trust nobody you ain't been broke with<br>
                    Niggas love to break my focus, bitch, I'm Obi Wan<br>
                    You caught in the maze, I<br>
                    Thought it'd be easy to get myself on<br>
                    I need it, but it takes time<br>
                    And I'm out of patience, I burnt it with you<br>
                    Can't lose myself to your ego, I wanna say<br>
                    Love me better when you try less<br>
                    I don't take much, just need your honesty, oh<br>
                    Love will work better when you confess<br>
                    Feelings don't need discussion<br>
                    Spend my life discoverin' new shit<br>
                    I've been ridin', ridin' through this cold world<br>
                    Thought you had another, went and caught up with ol' girl<br>
                    I feel like it's over<br>
                    Something's callin' to get closer<br>
                    I'm out of touch, I need your love, oh, it's a mile away<br>
                    And then you weren't sure, weren't sure, we'll go and hide away<br>
                    I feel like it's over<br>
                    Something callin' to get closer`
    } if (faixaAtual === 8) {
        nomeMusica.textContent = 'Snooze'
        nomeMusicaLetra.textContent = 'Snooze'
        letraMusica.innerHTML = `I'll touch that fire for you<br>
                    I do that three, four times again, I testify for you<br>
                    I told that lie, I'd kill that bitch<br>
                    I do what all of them around you scared to do, I'm not<br>
                    Long as you juggin' out here for me, I got it<br>
                    Mobbin', schemin', lootin', hide your bodies<br>
                    Long as you dreamin' 'bout me, ain't no problem<br>
                    I don't got nobody, just with you right now<br>
                    Tell the truth, I look better under you<br>
                    I can't lose when I'm with you<br>
                    How can I snooze and miss the moment?<br>
                    You just too important<br>
                    Nobody do body like you do<br>
                    I can't lose when I'm with you<br>
                    I can't just snooze and miss the moment<br>
                    You just too important<br>
                    Nobody do body like you do, you do<br>
                    In the droptop ride with you, I feel like Scarface (Scarface)<br>
                    Like that white bitch with the bob, I'll be your main one (main one)<br>
                    Let's take this argument back up to my place<br>
                    Sex remind you, I'm nonviolent, I'm your day one<br>
                    We ain't had shit, yeah, it was magic, yeah<br>
                    Smash and grab shit, yeah<br>
                    Nasty habits take a hold when you not here<br>
                    Ain't a home when you not here<br>
                    Hard to grow when you not here, I'm sayin'<br>
                    I can't lose when I'm with you<br>
                    How can I snooze and miss the moment?<br>
                    You just too important<br>
                    Nobody do body like you do<br>
                    I can't lose when I'm with you<br>
                    How can I snooze and miss the moment?<br>
                    You just too important<br>
                    Nobody do body like you do, you do<br>
                    Main one ridin'<br>
                    How you frontin' on me and I'm the main one tryin'?<br>
                    How you blame it on me and you the main one lyin'?<br>
                    How you threatenin' to leave and I'm the main one cryin'?<br>
                    Just tryna be your everything<br>
                    Main one ridin'<br>
                    How you frontin' on me and I'm the main one tryin'?<br>
                    How you blame it on me and you the main one lyin'?<br>
                    How you threatenin' to leave and I'm the main one cryin'?<br>
                    I can't lose when I'm with you, ooh<br>
                    How can I snooze and miss the moment?<br>
                    You just too important<br>
                    Nobody do body like you do<br>
                    I can't lose when I'm with you<br>
                    How can I snooze and miss the moment?<br>
                    You just too important<br>
                    Nobody do body like you do, you do<br>
                    Nah, nah, nah, nah<br>
                    I think I know, whoa-oh<br>
                    See, no, I can't lose<br>
                    I think I know, ooh-whoa, ooh-whoa-oh`
    } if (faixaAtual === 9) {
        nomeMusica.textContent = 'Notice Me'
        nomeMusicaLetra.textContent = 'Notice Me'
        letraMusica.innerHTML = `You stay on my mind<br>
                    I can't regret no time spent with you<br>
                    And I still wonder if you notice me, yes<br>
                    Outta my line if I box with you<br>
                    Outta my line if I check your line when you're not around<br>
                    Outta my lane if I get beside myself, I can't rock with you<br>
                    Can't decide right now, either way I'm busting through tonight with you<br>
                    Top down and the C3, speeding way to you<br>
                    Yes sir, when you me, toot that thang like<br>
                    All of this and more when you 'bout me<br>
                    All this and joy will surround you<br>
                    Long as you got me<br>
                    I don't wanna be your girlfriend<br>
                    I'm just tryna be your person<br>
                    I don't need to be your girl, uh<br>
                    Cool with just being your person, uh<br>
                    Already tried to be your girl<br>
                    We can't even speak, but you stay on my mind<br>
                    I can't regret no time spent with you<br>
                    And I still wonder if you notice me, yes<br>
                    If I had a dime or two<br>
                    For that cheap shit you be spitting, I provide the mood<br>
                    It's cool, but you be jockin' me for all my jewels<br>
                    Damn, fan nigga, hit it then lost your mind, mm<br>
                    I understand, man<br>
                    Said all of this and more<br>
                    Finna take me a ride to the shore now<br>
                    Finna sign me some lines, need insurance<br>
                    I can't lack, niggas can't hang, I just get more real<br>
                    I don't wanna be your girlfriend<br>
                    I'm just tryna be your person<br>
                    I don't need to be your girl, uh<br>
                    Cool with just being your person, uh<br>
                    Already tried to be your girl<br>
                    I won't get the dick that I deserve, yeah, yeah<br>
                    Try to flip on me, I hit you where it hurts, yeah, yeah<br>
                    Try to wife you, but you rather be a hoe, yeah<br>
                    So I spit this shit to let these niggas know, yeah, yeah<br>
                    I told you, you don't need no girl, uh<br>
                    Way you move gon' go get you hurt, I swear<br>
                    Bet you don't even miss your girl<br>
                    We can't even speak`
    } if (faixaAtual === 10) {
        nomeMusica.textContent = 'Gone Girl'
        nomeMusicaLetra.textContent = 'Gone Girl'
        letraMusica.innerHTML = `Ooh-ooh, ooh-ooh<br>
                    Split mind, don't need to decide when<br>
                    Straight forward, eyes on the climbing<br>
                    I decide no matter the climate<br>
                    Birthing bitches in my third trimester<br>
                    Shift eyes, they tell me you lying<br>
                    Don't care, just lay here beside me<br>
                    Hang time, chasing the rewind<br>
                    Hang time<br>
                    I need more space and security (security)<br>
                    I need less voices, just you and me (just you and me)<br>
                    I need your touch, not your scrutiny (scrutiny)<br>
                    Squeezing too tight, boy, you're losing me<br>
                    Boy, you're losing<br>
                    Gone, gone girl, gone girl<br>
                    You better learn how to face it<br>
                    She's gone, gone girl, so gone girl<br>
                    Never replace her<br>
                    She's gone, gone girl, gone girl<br>
                    You better learn how to face it<br>
                    She's gone, gone girl, so gone girl<br>
                    Can't think, it's too hard to process<br>
                    Get around you and I regress<br>
                    I decide what demons I digest<br>
                    I'm just tired of repeating, I digress<br>
                    Trying to find deeper meaning in nonsense<br>
                    Trying to grow without hating the process<br>
                    Tired of anticipating the worst, yet<br>
                    Still anticipating the worst (worst)<br>
                    I need more space and security (security)<br>
                    I need less voices, just you and me (just you and me)<br>
                    I need your touch, not your scrutiny (scrutiny)<br>
                    Squeezing too tight, boy, you're losing me<br>
                    Boy, you're losing<br>
                    Gone, gone girl, gone girl<br>
                    You better learn how to face it<br>
                    She's gone, gone girl, so gone girl<br>
                    Never replace her<br>
                    She's gone, gone girl, gone girl<br>
                    You better learn how to face it<br>
                    She's gone, gone girl, so gone girl<br>
                    Inward I go when there's no one around me<br>
                    And memories drown me, the further I go<br>
                    And ain't nobody talking 'bout the damage<br>
                    Pretending like it's all okay<br>
                    I tried to erase<br>
                    I live to escape<br>
                    Gone, gone girl, gone girl<br>
                    You better learn how to face it<br>
                    She's gone, gone girl, so gone girl<br>
                    She's gone, gone girl, gone girl<br>
                    You better learn how to face it<br>
                    She's gone, gone girl, so gone girl`
    } if (faixaAtual === 11) {
        nomeMusica.textContent = 'Smoking on my Ex Pack'
        nomeMusicaLetra.textContent = 'Smoking on my Ex Pack'
        letraMusica.innerHTML = `Roll the clip and run it back (you can trust in me)<br>
                    I'm really like that<br>
                    I'm really not friendly<br>
                    I need my credit, niggas hate that<br>
                    I need the numbers, (I can trust in you) I need the data<br>
                    Got you talkin' crazy<br>
                    Abracadabra, you sideshow<br>
                    I'm Bobbin' like psycho<br>
                    You gassin' like Texaco (you can trust in me)<br>
                    Infection like microbe<br>
                    You texted, "I might go"<br>
                    You push it, I might pop<br>
                    I'm on heart-throbs (you can trust in me)<br>
                    I got your favorite rapper blocked<br>
                    I heard the was whack<br>
                    Your favorite athlete screamin', "Text me back!" (You can trust in me)<br>
                    I make no exceptions<br>
                    The lesser part of me loves all the cap (I can trust in you)<br>
                    He screamin', "Gеt back together"<br>
                    I'm screamin', "Back of thе bus, trick!" (you can trust in me)<br>
                    Hawaii for weather<br>
                    Booty softer than leather<br>
                    These is feather weight<br>
                    I wipe my phone in case you don't, might beat the case (you can trust in me)<br>
                    Them accusations weak<br>
                    Them accusations true<br>
                    You hatin' from nosebleeds, (you can trust in me) I wish you well<br>
                    Smokin' on my ex pack tonight<br>
                    Smokin' on my ex pack tonight (you can trust in me)<br>
                    Smokin' on my ex pack tonight (I can trust in you)<br>
                    Smokin' on<br>
                    You can trust in me<br>
                    "I can-", you said, "I can trust in you" (you can trust in me)<br>
                    "I can, I can"<br>
                    You can trust in me (you can trust in me)<br>
                    You can, you can<br>
                    Oh-oh-oh, (you can trust in me) oh-oh<br>
                    (I can trust in you)<br>
                    (you can trust in me)`
    } if (faixaAtual === 12) {
        nomeMusica.textContent = 'Ghost in the Machine'
        nomeMusicaLetra.textContent = 'Ghost in the Machine'
        letraMusica.innerHTML = `Everything disgustin', conversation is so borin'<br>
                    Heard about what?<br>
                    "I hate her", "I don't agree", "I did it first"<br>
                    I give a fuck, I just wanna fuck, eat, sleep, love, happy<br>
                    Can you make me happy? Can you keep me happy?<br>
                    Can you distract me from all the disaster?<br>
                    Can you touch on me and not call me after?<br>
                    Can you hate on me and mask it with laughter?<br>
                    Can you lead me to the ark? What's the password?<br>
                    I need humanity<br>
                    Y'all lack humanity<br>
                    Drownin' in vanity<br>
                    Cravin' humanity<br>
                    Y'all lack humanity<br>
                    I need humanity, I need<br>
                    Everybody wanna be beautiful, scared of the unusual<br>
                    Scared of givin' mutual respect, all that you hate<br>
                    You reflect all that godlike<br>
                    You forget how to love somebody<br>
                    I hate everybody, I hate everyone<br>
                    Let's talk about A.I., robot got more heart than I<br>
                    Robot got future, I don't<br>
                    Robot get sleep, but I don't power down<br>
                    I'm wide open, I'm awake, I'm on autopilot<br>
                    I'm out of my mind and I'm wide open<br>
                    Can you distract me from all the disaster?<br>
                    Can you touch on me and not call me after?<br>
                    Can you hate on me and mask it with laughter?<br>
                    Can you lead me to the ark? What's the password?<br>
                    I need humanity<br>
                    Y'all lack humanity<br>
                    Drownin' in vanity<br>
                    Cravin' humanity<br>
                    Y'all lack humanity<br>
                    I need humanity, I need<br>
                    You said all my friends are on my payroll<br>
                    You're not wrong, you're an asshole<br>
                    Screaming at you in the Ludlow<br>
                    I was yours for free (free, free, free)<br>
                    I don't get existential<br>
                    I just think about myself and look where that got me<br>
                    Standin' on my own in an airport bar or hotel lobby<br>
                    Waiting to feel clean<br>
                    That's so fucking boring<br>
                    Can you distract me from all the disaster?<br>
                    Can you touch on me and not call me after?<br>
                    Can you hate on me and mask it with laughter?<br>
                    Can you lead me to the ark? What's the password?<br>
                    I need humanity<br>
                    Y'all lack humanity<br>
                    Drownin' in vanity<br>
                    Cravin' humanity<br>
                    Y'all lack humanity<br>
                    I need humanity, I need<br>
                    Those who have forsaken their humanity<br>
                    They're trying to patch their life with morality<br>
                    I think I might be tryna patch my life with morality<br>
                    I'm curious, I'm curious`
    } if (faixaAtual === 13) {
        nomeMusica.textContent = 'F2F'
        nomeMusicaLetra.textContent = 'F2F'
        letraMusica.innerHTML = `I been thinkin' 'bout you, haven't got much sleep<br>
                    Worried that you already done replaced me<br>
                    Worried I done it took far and you too hurt to hear me<br>
                    Smokin' on a Backwood because I miss my ex<br>
                    Now I'm ovulatin' and I need rough sex<br>
                    Knowing you gon' block me tomorrow<br>
                    Can you still come and get me?<br>
                    Missin' my daddy when the nights get cold<br>
                    Wishin' I didn't wanna sell my soul<br>
                    Wishin' that it wasn't so hard, man, I'm on my knees<br>
                    Get a rise out of watchin' you fall<br>
                    Get a kick out of missin' your call<br>
                    I hate me enough for the two of us<br>
                    Hate that I can't let go of you enough, this why<br>
                    I fuck him 'cause I miss you<br>
                    I fuck him 'cause I really miss you<br>
                    I fuck him 'cause I miss you<br>
                    I just had to get my rocks off<br>
                    You got no loyalty, you push me 'til I pop off<br>
                    I beg for empathy, you gave me nothing<br>
                    So hard without you (so hard without you)<br>
                    I feel it coming, you gon' find another one<br>
                    To keep you calm and tuck you in at night, I wonder<br>
                    Will you call me, will you hang me out to dry?<br>
                    Missin' my daddy when the nights get cold<br>
                    Wishin' I didn't wanna sell my soul<br>
                    Wishin' that it wasn't so hard, man, I'm on my knees<br>
                    Get a rise out of watchin' you fall<br>
                    Get a kick out of missin' your call<br>
                    I hate me enough for the two of us<br>
                    Hate that I can't let go of you enough, this why<br>
                    I fuck him 'cause I miss you<br>
                    I fuck him 'cause I really miss you<br>
                    I fuck him 'cause I miss you<br>
                    I'm lookin' for comfort<br>
                    I knew all along<br>
                    I knew that you loved her<br>
                    Since we dropping bombs<br>
                    I fuck him 'cause I miss you<br>
                    I fuck him 'cause I really miss you<br>
                    I fuck him to forget you<br>
                    I fuck him 'cause I miss you<br>
                    I fuck him 'cause I miss you<br>
                    I try to run, but I can't duck 'em<br>
                    Fuck 'em, but I don't cuff 'em<br>
                    I fuck 'em 'cause I miss you`
    } if (faixaAtual === 14) {
        nomeMusica.textContent = 'Nobody Gets Me'
        nomeMusicaLetra.textContent = 'Nobody Gets Me'
        letraMusica.innerHTML = `Took a long vacation<br>
                    No makeup, just Jay-Z<br>
                    You were balls deep, now we beefin'<br>
                    Had me butt-naked at the MGM<br>
                    So wasted screamin', "Fuck that, "<br>
                    Love me now, but I'm anythin'<br>
                    Hurry now, baby, stick it in<br>
                    'Fore the memories get to kickin' in<br>
                    It's too late<br>
                    I don't wanna lose what's left of you<br>
                    How am I supposed to tell ya?<br>
                    I don't wanna see you with anyone but me<br>
                    Nobody gets me like you<br>
                    How am I supposed to let you go?<br>
                    Only like myself when I'm with you<br>
                    Nobody gets me, you do (do)<br>
                    You do<br>
                    Nobody gets me, you do (do)<br>
                    You do<br>
                    Nobody gets me, you do<br>
                    You do<br>
                    Nobody gets me, you do<br>
                    Took me out to the ballet<br>
                    You proposed, I went on the road<br>
                    You was feelin' empty, so you left me<br>
                    Now I'm stuck dealin' with a deadbeat<br>
                    If I'm real, I deserve less<br>
                    If I was you, I wouldn't take me back<br>
                    I pretend when I'm with a man, it's you<br>
                    And I know that it's too late<br>
                    I don't wanna lose what's left of you<br>
                    How am I supposed to tell ya?<br>
                    I don't wanna see you with anyone but me<br>
                    Nobody gets me like you<br>
                    How am I supposed to let you go?<br>
                    Only like myself when I'm with you<br>
                    Nobody gets me, you do (do)<br>
                    You do<br>
                    Nobody gets me, you do (do)<br>
                    You do<br>
                    Nobody gets me, you do (do, ooh)<br>
                    You do<br>
                    Nobody gets me, you do (do, ooh)<br>
                    Nobody gets me, you do`
    } if (faixaAtual === 15) {
        nomeMusica.textContent = 'Conceited'
        nomeMusicaLetra.textContent = 'Conceited'
        letraMusica.innerHTML = `I don't like nobody, I don't feel guilty about it<br>
                    I just got my body done, ain't got no guilt about it<br>
                    I just heard your opinion, I could've did without it<br>
                    All these bitches is minions, despicable like, ooh (oh)<br>
                    Feeling like Mike Lowrey, oh<br>
                    Proud about my salary, oh, ooh (oh)<br>
                    Heard they calling me out<br>
                    Love it when they calling me out, oh<br>
                    I got no reason to depend on you<br>
                    No reason to make friends, I'm cool, oh<br>
                    I got no reason to depend on you<br>
                    No reason to make friends, I'm cool<br>
                    I got everything that I need, and I want more<br>
                    I can't take my foot off they neck, it's an encore<br>
                    I got everything and I'm living off of revengе<br>
                    I been burning bridges, I'll do it all over again<br>
                    'Cause I'm bеtting on me, me, me<br>
                    Me, me, me<br>
                    Me, me, me<br>
                    Ooh, I'm betting on me, me, me<br>
                    Me, me, me<br>
                    Me, me, me, oh<br>
                    Heard you fucking these lames, and ain't lose no sleep about it<br>
                    Always speaking my name, I can't lose no sleep about it<br>
                    Say that shit to my face, you know I'm gon' slide about it<br>
                    Put that bitch in her place, she ain't make no peep about it, oh (oh)<br>
                    Feeling like a billion, oh<br>
                    Feel I got my drill on your ho, oh (oh)<br>
                    I'm just living my goals<br>
                    Pressure makes diamonds, can't fold, oh<br>
                    I got no reason to depend on you<br>
                    No reason to make friends, I'm cool, oh<br>
                    I got no reason to depend on you<br>
                    No reason to make friends, I'm cool<br>
                    I got everything that I need, and I want more (want more)<br>
                    I can't take my foot off they neck, it's an encore (encore)<br>
                    I got everything and I'm living off of revenge (of revenge)<br>
                    I been burning bridges, I'll do it all over again<br>
                    'Cause I'm betting on me, me, me<br>
                    Me, me, me<br>
                    Me, me, me<br>
                    Oh, I'm betting on me, me, me<br>
                    Me, me, me<br>
                    Me, me, me, oh`
    } if (faixaAtual === 16) {
        nomeMusica.textContent = 'Special'
        nomeMusicaLetra.textContent = 'Special'
        letraMusica.innerHTML = `I wish I was that girl from the Gucci store<br>
                    She never wore any makeup and she owns couture<br>
                    I got pimples where my beauty marks should be<br>
                    I got dry skin on my elbows and knees<br>
                    I never liked her, wanted to be like her<br>
                    Hate how you look at her, 'cause you never saw me<br>
                    Like I was an art piece, like I was an ordinary girl<br>
                    I wish I was special<br>
                    I gave all my special<br>
                    Away to a loser<br>
                    Now I'm just a loser<br>
                    I used to be special<br>
                    But you made me hate me<br>
                    Regret that I changed me<br>
                    I hate that you made<br>
                    Just like you<br>
                    Just like you<br>
                    I wanted to be thick, now I wanna be thin<br>
                    Heard Pilates is in, bash your windows out<br>
                    You gon' hear my mouth, you could kick me out<br>
                    You say I'm too wild, you gon' hate me now<br>
                    Boy, you got me fucked up, now I'm gettin' fucked up<br>
                    Thinkin' 'bout us fuckin', why you'd have to fuck her?<br>
                    I don't wanna see you, why'd you have to treat me<br>
                    Like I was an ordinary girl?<br>
                    I wish I was special<br>
                    I gave all my special<br>
                    Away to a loser<br>
                    Now I'm just a loser<br>
                    I used to be special<br>
                    But you made me hate me<br>
                    Regret that I changed me<br>
                    I hate that you made me just like you<br>
                    Just like you`
    } if (faixaAtual === 17) {
        nomeMusica.textContent = 'Too Late'
        nomeMusicaLetra.textContent = 'Too Late'
        letraMusica.innerHTML = `I been gone so long, I don't know where I'm going<br>
                    You be on my phone, talking 'bout what's my problem?<br>
                    I done go alone and get it how I want it<br>
                    Had to be alone to out figure how I should be loved<br>
                    And if it's just us, is that enough?<br>
                    Is it bad that I want more?<br>
                    Is it too late for us?<br>
                    We both dangerous<br>
                    Moving so close, we combust<br>
                    Is it bad that I want more?<br>
                    Is it too late for us?<br>
                    We both scared to love<br>
                    Moving so close, we combust<br>
                    Is it bad that I want more?<br>
                    See, bust it like a toolie in your waistband<br>
                    Bust it like that booty too big and you need two hands<br>
                    Bust it like you catchin' a body and you in G-stance<br>
                    Bust it like it's casual Friday and you hеar two things<br>
                    Call bluff, I know what's up, can't get enough<br>
                    Is it bad that I want more?<br>
                    Is it too latе for us?<br>
                    We both dangerous<br>
                    Moving so close, we combust<br>
                    Is it bad that I want more?<br>
                    Is it too late for us?<br>
                    We both scared to love<br>
                    Moving so close, we combust<br>
                    Is it bad that I want more?<br>
                    Mmm, pressure, I won't learn my lesson<br>
                    I want you to stretch it, limit, want you to test it<br>
                    I know I was born to roll<br>
                    I gotta know<br>
                    Is it bad that I want more?<br>
                    Is it too late for us?<br>
                    We both dangerous<br>
                    Moving so close, we combust<br>
                    Is it bad that I want more?<br>
                    Is it too late for us?<br>
                    We both scared to love<br>
                    Moving so close, we combust<br>
                    Is it bad that I want more?<br>
                    Showdown with you<br>
                    Nobody hear me like you do<br>
                    Every time you break my heart, it feel new<br>
                    Every time I fall apart, I call you<br>
                    I just wanna be loved, loving sucks<br>
                    I can't enough, is it bad that I want more?<br>
                    Is it too late for us?`
    } if (faixaAtual === 18) {
        nomeMusica.textContent = 'Far'
        nomeMusicaLetra.textContent = 'Far'
        letraMusica.innerHTML = `Try to watch all on my silhouette<br>
                    Try to watch all my emotions<br>
                    Need a few brews, need a palm tree<br>
                    I be drinking in private, don't call me to party it up<br>
                    Fuck on your nigga for cardio<br>
                    Took a dip and he fell in love right away<br>
                    I put my feelings on lay away (ah)<br>
                    Done being used, done playing stupid<br>
                    Done faking cool<br>
                    (I don't want none of that shit, I don't want it)<br>
                    Done being screwed, done feeling clueless<br>
                    That's how you do<br>
                    (I don't want none of that shit, she got me runnin' so)<br>
                    Far, far, like I don't recognize me<br>
                    Far (far), far 'cause I lеt you define me<br>
                    I'm far, far 'causе I can't trust nobody<br>
                    Far, stay far, it's so far<br>
                    Lately, I feel less cool than before<br>
                    (Already under my bed about)<br>
                    (Don't need you around to tell me I'm special)<br>
                    Made you check your bull at the door<br>
                    (Got it every time, need to feed my ego)<br>
                    (Nobody wanted to be my hero)<br>
                    Always on my mind, trust is hard find<br>
                    Everything reminds me of us<br>
                    I just want my sanity back<br>
                    Better than being your enemy<br>
                    (Better than letting go, scared of that, oh)<br>
                    Done being used, done playing stupid<br>
                    Done being cool<br>
                    (I don't want none of that shit, I ain't goin')<br>
                    Done getting screwed, done playing clueless<br>
                    That's how you do<br>
                    (I don't want none of that shit, she got me runnin' so)<br>
                    Far, far, like I don't recognize me<br>
                    Far, far 'cause I let you define me<br>
                    I'm far, far 'cause I can't trust nobody<br>
                    Far, stay far, it's so far<br>
                    I remember when you had me upside down<br>
                    Stressed me out and turned me out, it's all back now<br>
                    I remember when I wasn't so burnt out<br>
                    I'd rather that than be your enemy, ready to let it go<br>
                    Dragging me far, far, like I don't recognize me<br>
                    Far (far), far 'cause I let you define me<br>
                    I'm far, far 'cause I can't trust nobody<br>
                    Far, stay far, it's so far`
    } if (faixaAtual === 19) {
        nomeMusica.textContent = 'Shirt'
        nomeMusicaLetra.textContent = 'Shirt'
        letraMusica.innerHTML = `Kiss me, dangerous<br>
                    Been so lost without you all around me<br>
                    Get anxious<br>
                    Lead me, don't look back, it's all about you<br>
                    In the dark right now<br>
                    Feeling lost, but I like it<br>
                    Comfort in my sins, and all about me<br>
                    All I got right now<br>
                    Feel the taste of resentment<br>
                    Simmer in my skin, it's all about<br>
                    Blood stain on my shirt, new bitch on my nerves<br>
                    Old nigga got curved, going back on my word<br>
                    Damn, bitch, you so thirsty<br>
                    Still don't know my worth, still stressing perfection<br>
                    Let you all in my mental, got me looking too desperate<br>
                    Damn, you ain't deserve<br>
                    Broad day, sunshine, I'll find a way to fuck it up still<br>
                    Can't cry about the shit that I can't change<br>
                    Just my mind, gotta get outta here<br>
                    Tough crowd, I hate it, can't stay<br>
                    In the dark right now<br>
                    Feeling lost, but I like it<br>
                    Comfort in my sins, and all about me<br>
                    All I got right now<br>
                    Feel the taste of resentment<br>
                    Simmer in my skin, it's all about<br>
                    Blood stain on my shirt, new bitch on my nerves<br>
                    Old nigga got curved, going back on my word<br>
                    Damn, bitch, you so thirsty<br>
                    Still don't know my worth, still stressing perfection<br>
                    Let you all in my mental, got me looking too desperate<br>
                    Damn<br>
                    It's what you say and how you do me<br>
                    How I'm 'posed to trust, baby? 'Posed to love?<br>
                    It ain't 'posed to hurt this way, all I need is the best of you<br>
                    How I got to say it? Give me all of you<br>
                    In the dark right now<br>
                    Feeling lost, but I like it<br>
                    Comfort in my sins, and all about me<br>
                    All I got right now<br>
                    Feel the taste of resentment<br>
                    Simmer in my skin, it's all about<br>
                    Blood stain on my shirt, new bitch on my nerves<br>
                    Old nigga got curved, going back on my word<br>
                    Damn, bitch, you so thirsty<br>
                    Still don't know my worth, still stressing perfection<br>
                    Let you all in my mental, got me looking too desperate<br>
                    Damn, you ain't deserve`
    } if (faixaAtual === 20) {
        nomeMusica.textContent = 'Open Arms'
        nomeMusicaLetra.textContent = 'Open Arms'
        letraMusica.innerHTML = `When you do your best you ca-, I done told you<br>
                    When you do your best, hell, that's all you can do<br>
                    You, me and anybody else<br>
                    So they always start talkin'<br>
                    Ooh<br>
                    Runnin' away from where I'm from<br>
                    Never can stay with no one<br>
                    Loving you almost feels like something<br>
                    When no ones around me, you lost and found me<br>
                    I was surrounded<br>
                    With open, open, open, open arms (ooh)<br>
                    Open arms, you keep me open<br>
                    I'm so devoted<br>
                    You keep me open, open arms<br>
                    I'm so devoted to you, to you, to you<br>
                    Spent your life bein' hopeless<br>
                    Chokin' on insecurity<br>
                    I know all this is bad<br>
                    But, please, put a leash on me anyway<br>
                    Who needs self-esteem anyway?<br>
                    I hate myself to make you stay<br>
                    Push me away, I'll be right here<br>
                    With open, open, open, open arms (ooh)<br>
                    Open arms, you keep me open<br>
                    I'm so devoted<br>
                    You keep me open, open arms<br>
                    I'm so devoted to you, to you, to you<br>
                    No matter what come between us, yeah, I decided (ayy)<br>
                    I'm forever ridin' (whoa), you're forever guidin' (ayy)<br>
                    Pull up on an opp, hit his curb up, slide it (brr)<br>
                    Notice when you mad, ain't no words, just silence (ooh)<br>
                    You my favorite color, now you seein' every shade of me<br>
                    You say that I'm trippin', I hit back like, "Where you takin' me?"<br>
                    Locked in for life, on God, no replacin' me<br>
                    Consequences, repercussions, karma keep on changin' me<br>
                    For you I try, face card valid, ID<br>
                    C'est la vie, go to Paris, it ain't five-star, it ain't me<br>
                    Over-solid, keep it concrete, I'ma bet it on your whole fee<br>
                    Just don't switch sides, I could fire piece your wrist, AP<br>
                    Through the ups and downs and all the heat<br>
                    Take a turn and tell you what it be<br>
                    Backshots make you feel relief, anything, just don't you ever leave<br>
                    I guess I gotta go<br>
                    I guess it's time to go<br>
                    I gotta let you go<br>
                    (I'm so devoted)<br>
                    You keep me open<br>
                    Gotta let you go, gotta let you go<br>
                    I gotta let you go, I must<br>
                    You're the only one that's holdin' me down<br>
                    (You're the only one holdin' me down)<br>
                    ('Cause I'm the only one that's holdin' me down)`
    } if (faixaAtual === 21) {
        nomeMusica.textContent = 'I Hate U'
        nomeMusicaLetra.textContent = 'I Hate U'
        letraMusica.innerHTML = `I be so sick of you niggas, y'all contradicting<br>
                    I be so bored with myself, can you come and fuck me?<br>
                    I feel so ordinary, 'cept when you around me<br>
                    Treat me like corduroy, wear me out<br>
                    Arguments, you air me out<br>
                    Trippin' 'bout your whereabouts<br>
                    I can't keep no conflict with you<br>
                    Boy, can we just rub it out?<br>
                    I don't want no static with you, you know you my plug<br>
                    And I can't shake this habit, no<br>
                    I've been up, baby<br>
                    Heavy reminiscin'<br>
                    Heavy on the missin' you<br>
                    Wish it was different than what it was (oh yeah)<br>
                    I've been up, baby<br>
                    Lost in the lie of us<br>
                    Lost, ain't no findin' us<br>
                    I've been up, baby<br>
                    And if you wondered if I hate you (I do)<br>
                    Shitty of you to make me feel just like this<br>
                    What I would do to make you feel just like this<br>
                    And if you wondered if I hate you (fuck you)<br>
                    Shitty of you to make me feel just like this<br>
                    What I would do to make you feel just like this<br>
                    Used to be too solid 'til you scrambled me<br>
                    Used to be your rider, you mishandle me<br>
                    Used to be nonviolent 'til you ambushed me<br>
                    Now I'm out here wildin' with you<br>
                    Now I'm out here, silent treatment, that mean no permission (no)<br>
                    Missionary gettin' borin', can you switch positions? (Yeah)<br>
                    Hard to save your soul, you don't ever listen, no (no)<br>
                    I've been up, baby<br>
                    Heavy reminiscin'<br>
                    Heavy on the missin' you<br>
                    Wish it was different than what it was (oh yeah)<br>
                    I've been up, baby<br>
                    Lost in the lie of us<br>
                    Lost, ain't no findin' us<br>
                    I've been up, baby<br>
                    And if you wondered if I hate you (I do)<br>
                    Shitty of you to make me feel just like this<br>
                    What I would do to make you feel just like this<br>
                    And if you wondered if I hate you (fuck you)<br>
                    Shitty of you to make me feel just like this<br>
                    What I would do to make you feel just like this`
    } if (faixaAtual === 22) {
        nomeMusica.textContent = 'Good Days'
        nomeMusicaLetra.textContent = 'Good Days'
        letraMusica.innerHTML = `Good day in my mind, safe to take a step out<br>
                    Get some air now, let your edge out<br>
                    Too soon, I spoke, you be heavy in my mind<br>
                    Can you get the heck out?<br>
                    I need rest now, got me bummed out<br>
                    You so, you so, you, baby, baby, babe<br>
                    I've been on my empty mind shit<br>
                    I try to keep from losin' the rest of me<br>
                    I worry that I wasted the best of me on you, baby<br>
                    You don't care<br>
                    Said, not tryna be a nuisance, it's just urgent<br>
                    Tryna make sense of loose change<br>
                    Got me at war in my mind<br>
                    Gotta let go of weight, can't keep what's holding me<br>
                    Choose to watch<br>
                    While the world break up and fall on me<br>
                    All the while, I'll await my armored fate with a smile<br>
                    Still wanna try, still believe in (good days)<br>
                    Good days, always (good days)<br>
                    Always inside (always in my mind, always in my mind, mind)<br>
                    Good day living in my mind<br>
                    Tell me I'm not my fears, my limitations<br>
                    I disappear, if you let me<br>
                    Feeling like (on your own)<br>
                    Feeling like Jericho<br>
                    Feeling like Job when he lost his shit<br>
                    Gotta hold my own, my cross to bear alone, I<br>
                    Ooh, paid a deal, way to kill the mood<br>
                    Know you like that shit, yeah, groovy baby, baby<br>
                    Heavy on my empty mind shit<br>
                    I gotta keep from losin' the rest of me (losin' the rest of me)<br>
                    Still worry that I wasted the best of me on you, babe<br>
                    You don't care<br>
                    Said, not tryna be a nuisance, it's just urgent (it's urgent)<br>
                    Tryna make sense of loose change<br>
                    Got me at war in my mind (my mind)<br>
                    Gotta let go of weight, can't keep what's holding me<br>
                    Choose to watch<br>
                    While the world break up and fall on me<br>
                    All the while, I'll await my armored fate with a smile<br>
                    Still wanna try, still believe in (good days, good days on my mind)<br>
                    Good days (good days on my mind)<br>
                    Always sunny inside (always in my mind, always in my mind, mind)<br>
                    Good day living in my mind<br>
                    Gotta get right, tryna free my mind before the end of the world<br>
                    I don't miss no ex, I don't miss no text<br>
                    I choose not to respond<br>
                    I don't regret, just pretend shit never happened<br>
                    Half of us layin' waste to our youth, is in the present<br>
                    Half of us chasin' fountains of youth and it's in the present now<br>
                    Always in my mind, always in my mind, mind<br>
                    You've been making me feel like I'm<br>
                    Always in my mind, always in my mind, mind`
    } if (faixaAtual === 23) {
        nomeMusica.textContent = 'Forgiveless'
        nomeMusicaLetra.textContent = 'Forgiveless'
        letraMusica.innerHTML = `Ayy dawg, yo, yo<br>
                    Yo, yo, yo, yo, yo, yo<br>
                    I'm the original, G-O-D<br>
                    Makin' young ladies scream is my specialty<br>
                    When I go da-da-da-da-da, girls get hype<br>
                    From the funky fresh music that's stereotyped<br>
                    When I killed that ol' mad rugged flow<br>
                    Not sayin' Ason, duck of the disco<br>
                    Or the disco duck, strictly hip-hop<br>
                    Baby, baby, I can't stop<br>
                    I don't care 'bout consequences, I want my lick back<br>
                    I don't mind who's watchin', get to pushin' your wig back<br>
                    I don't mind burnin' bridges that my enemies, center peace<br>
                    Call that bitch my kid, she ain't no kin to me<br>
                    Gotta watch how you was built when you were 'round me, though<br>
                    Give a fuck 'bout what you prefer<br>
                    I'm too profound to go back and forth, with no average dork<br>
                    It goes, spells and sorcery, hug your rosaries<br>
                    I don't mind competition, it is what it is<br>
                    You don't mind second fiddle, that's why you a bitch<br>
                    You don't think for yourself and that's none of my business<br>
                    You take it, I dish it, I'm genie, three wishes<br>
                    Better watch how you think out loud, if it's 'bout me though<br>
                    Got a couple that's outside, they kill about me though<br>
                    I don't need nobody help, angels surround me, though<br>
                    Back and forth it go, it's hard, I know<br>
                    I thought I told you before, it's not gon' end how you want<br>
                    Not in the dark anymore<br>
                    I might forgive it, I won't forget it<br>
                    I thought I told you before, it's not gon' end how you want<br>
                    Not in the dark anymore<br>
                    I might forgive it, I won't forget it<br>
                    This that old West Coast, East Coast, North Coast, South Coast shit<br>
                    Yo, yo, this is that old Boogie Nights<br>
                    Bronx the Boogie old type shit<br>
                    Yo, yo, yo, I wanna give a special shoutout all my niggas and niggarettes<br>
                    All race, creed and colors<br>
                    It's all love, my nigga`
    } 
}

botaoPlayPause.addEventListener('click', tocarOuPausar)
btAvancar.addEventListener('click', proximaFaixa)
btVoltar.addEventListener('click', voltarFaixa)