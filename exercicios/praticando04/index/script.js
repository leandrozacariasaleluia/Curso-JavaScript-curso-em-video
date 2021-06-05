function gerar() {
    var nu = document.getElementById('txtnum')
    var tabu = document.getElementById('txttabu')    
    if (nu.value.length == 0){
        window.alert('[ERRO] Dígite um Número')
    } else {
        var n = Number(nu.value)
        tabu.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab${c}`
            tabu.appendChild(item)
        }
    }
}