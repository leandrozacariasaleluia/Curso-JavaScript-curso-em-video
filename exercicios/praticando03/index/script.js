function contar() {
    var ini = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo invalido! Considerado como passo 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449} ${c} `
        }          
        } else {
            // contagem decrescente
            for (var c = i; c >= f; c -= p)
            res.innerHTML += `\u{1F449} ${c} `
        } 
        res.innerHTML += '\u{1F3C1}'
             
    }
}