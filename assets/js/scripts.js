
function calcular(){
    let altura = document.getElementById("altura")
    let peso = document.getElementById("peso")
    let res = document.getElementById("res")
    let n1 =  Number(altura.value)
    let n2 = Number(peso.value)
    var imc = n2 / (n1 * n1)
    res.innerHTML = `Seu Imc é ${imc.toFixed(2)}`
    res.style.textTransform = 'uppercase'
    
}