function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date();
var horas = data.getHours();
// var horas = 1
msg.innerHTML = `Agora são ${horas} horas`
    if (horas > 0 && horas < 12) {
        img.src = 'fotomanha.png'
        msg.innerHTML = `It's now ${horas} o'clock. Good Morning!!`
        document.body.style.background = '#edba7b'
    }
    else if (horas >= 12 && horas < 18) {
        img.src = 'fototarde.png'
        msg.innerHTML = `It's now ${horas} o'clock. Good Afternoon!!`
        document.body.style.background = '#DAA520'

    }
    else {
        img.src ='fotonoite.png'
        msg.innerHTML = `It's now ${horas} o'clock. Good Night!!`
        document.body.style.background = '#0b292b'
    }
}


