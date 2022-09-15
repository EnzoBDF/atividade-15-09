let penis = new Array()

const velocidade = function(){
    let x = document.getElementById('deslocamento').value
    let y = document.getElementById('tempo').value
    z = parseFloat(x) / parseFloat(y)
    document.getElementById('resultado').value = z
    penis.push(historico)
    historico = `${x}/${y}=${z}`
    console.log(penis)
}

