
const title =  document.getElementById('title')
title.innerHTML = "Neste artigo Vamos falar um Pouco sobre o IMC"
const subtitle = document.getElementById('subtitle')
subtitle.innerHTML = "O que é o IMC?"
const artigo = document.getElementById('artigo')
artigo.innerHTML = " O Índice de Massa Corporal (IMC) é basicamente uma maneira de entender se alguém está com um peso saudável para a sua altura. Você divide o peso da pessoa pelo quadrado da altura dela. Isso dá uma ideia geral se a pessoa está abaixo do peso, dentro do peso normal, com sobrepeso ou obesa.Mas é importante lembrar que o IMC não conta toda a história. Ele não leva em consideração coisas como a quantidade de músculos que alguém tem, onde a gordura está localizada no corpo ou quão saudável alguém é em geral. Então, embora seja útil para começar a entender a saúde, não é a única coisa que importa."


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