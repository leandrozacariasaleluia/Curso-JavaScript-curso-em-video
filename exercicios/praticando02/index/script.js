function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')   
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
    var img = document.getElementById('img')
    if (idade <= 4 && fsex[0].checked) {        
        img.src = '../imagens/1ano-homem.png'
        document.body.style.background = '#A9BCF5'            
    } else if (idade <= 4 && fsex[1].checked) {        
        img.src = '../imagens/1ano-mulher.png'
        document.body.style.background = '#F5A9BC'
    } else if (idade <= 10 && fsex[0].checked) {        
        img.src = '../imagens/5anos-homem.png'
        document.body.style.background = '#5882FA'
    } else if (idade <= 10 && fsex[1].checked) {        
        img.src = '../imagens/5anos-mulher.png'
        document.body.style.background = '#F781F3'
    } else if (idade <= 19 && fsex[0].checked) {        
        img.src = '../imagens/15anos-homem.png'
        document.body.style.background = '#58FA58'
    } else if (idade <= 19 && fsex[1].checked) {        
        img.src = '../imagens/15anos-mulher.png'
        document.body.style.background = '#F7FE2E'
    } else if (idade <= 35 && fsex[0].checked) {        
        img.src = '../imagens/20anos-homem.png'
        document.body.style.background = '#FA8258'
    } else if (idade <= 35 && fsex[1].checked) {        
        img.src = '../imagens/20anos-mulher.png'
        document.body.style.background = '#F781BE'
    } else if (idade <= 55 && fsex[0].checked) {        
        img.src = '../imagens/40anos-homem.png'
        document.body.style.background = '#0101DF'
    } else if (idade <= 55 && fsex[1].checked) {        
        img.src = '../imagens/40anos-mulher.png'
        document.body.style.background = '#088A08'
    } else if (idade <= 120 && fsex[0].checked) {        
        img.src = '../imagens/60anos-homem.png'
        document.body.style.background = '#8258FA'
    } else if (idade <= 120 && fsex[1].checked) {        
        img.src = '../imagens/60anos-mulher.png'
        document.body.style.background = '#8258FA'
    } else if (idade > 120) {        
        img.src = '../imagens/120anos.png'
        document.body.style.background = '#000000'
    }    
    
}
   
