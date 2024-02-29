
const noticia = {
  title: "",
  subtitle: "",
  artigo: "",
};
noticia.title = document.getElementById("title");
noticia.title.innerHTML = "Neste artigo Vamos falar um Pouco sobre o IMC";
noticia.subtitle = document.getElementById("subtitle");
noticia.subtitle.innerHTML = "O que é o IMC?";
noticia.artigo = document.getElementById("artigo");
noticia.artigo.innerHTML =
  " O Índice de Massa Corporal (IMC) é basicamente uma maneira de entender se alguém está com um peso saudável para a sua altura. Você divide o peso da pessoa pelo quadrado da altura dela. Isso dá uma ideia geral se a pessoa está abaixo do peso, dentro do peso normal, com sobrepeso ou obesa.Mas é importante lembrar que o IMC não conta toda a história. Ele não leva em consideração coisas como a quantidade de músculos que alguém tem, onde a gordura está localizada no corpo ou quão saudável alguém é em geral. Então, embora seja útil para começar a entender a saúde, não é a única coisa que importa.";
noticia.title = document.getElementById("calculadora-h2");
noticia.title.innerHTML = "Calculadora de Indice de Massa corporal";
noticia.title = document.getElementById("table-title");
noticia.title.innerHTML = "Veja abaixo a tabela";
noticia.artigo = document.querySelector(".paragrafo1");
noticia.artigo.innerHTML =
  "A tabela do IMC geralmente é dividida em categorias queindicam o estado de peso de uma pessoa. As categorias comuns são:";
noticia.artigo = document.querySelector(".paragrafo2");
noticia.artigo.innerHTML =
  "No entanto, é importante ressaltar que o IMC é uma medidasimplificada e não considera a composição corporal (como a proporção de massa muscular e gordura) nem outros fatores importantes, como distribuição de gordura e características individuais. Por exemplo, uma pessoa musculosa pode ter um IMC mais alto, mesmo estando saudável. Portanto, o IMC deve ser usado como uma ferramenta inicial de triagem e não como uma medida definitiva da saúde de alguém. Sempre é recomendável consultar um profissional de saúde para uma avaliação completa.";




  function calcular() {
  let altura = document.getElementById("altura");
  let peso = document.getElementById("peso");
  let res = document.getElementById("res");
  let n1 = Number(altura.value);
  let n2 = Number(peso.value);
  let imc = n2 / (n1 * n1);
  res.innerHTML = `Seu Imc é ${imc.toFixed(2)}`;
  res.style.textTransform = "uppercase";

  if (imc < 18.5){
    res.style.color = 'orange'
  } else if (imc >= 18.5 && imc <= 24.9){
    res.style.color = 'green'
  } else if ( imc >= 25 && imc <= 29.9){
    res.style.color = 'orange'
  } else {
    res.style.color = 'res'
  }
}

function menuMobile() {
  let menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
}


