function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date()
    var hora = data.getHours()
    //var hora = 0 //alterar para teste
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha-redonda.jpg'
        document.body.style.background = '#6b6d93'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde-redonda.jpg'    
        document.body.style.background = '#196fac'
    }else if (hora >= 18 && hora < 21) {
        //boa entardecer
        img.src = 'entardecer-redonda.jpg'    
        document.body.style.background = '#714224' 
    }else {
        //boa noite
        img.src = 'noite-redonda.jpg'
        document.body.style.background = '#563116'
    }
}   
