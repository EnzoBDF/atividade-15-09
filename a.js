exercitodomito = []

function bernardopelado(){
    penis=document.getElementById('penis')
    vagina=document.getElementById('vagina')
    bengadavenus.value= (parseFloat(penis.value)/parseFloat(vagina.value)).toFixed(2)

    if (localStorage.getItem('exercitodomito') !== null){
        exercitodomito = JSON.parse(localStorage.getItem('exercitodomito'))
    }

    exercitodomito.push(bengadavenus.value)
    localStorage.setItem('exercitodomito', JSON.stringify(exercitodomito))
    document.getElementById('resultados').value = exercitodomito


}
