// no ensino de JS normalmente se escreve em linguagem natural pra depois "traduzir" pra JS
// 1 Acessar a janela (browser)
// 2 pegar html todo
// 3 pegar o botão
// 4 saber que está sendo clicado no botão

// 5  Acessar a janela 
// 6 Pegar o HTML todo
// 7 Pegar o elements
// 8 Mover o elements para direita
// o ponto . significa pegar algo que tá "dentro". Então window.document significa pegar documento que tá dentro da janela
//query selector é seletor de busca, é um COMANDO. o que ta dentro do parênteses é o seletor de classe e tá dentro de aspas simples pq é um texto. 
const buttonRight = window.document.querySelector('.button-arrow.-right');
const buttonLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');

let pixels = 100;

buttonRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});
buttonLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
});
//adicionar evento ouvinte - quando o evento acontecer (uma clicada, nesse caso). 
//Evento é o que acontece na interação com usuário - JEFF diz: Não necessariamente. Ver https://www.w3schools.com/jsref/dom_obj_event.asp para mais informações
//function é a função, uma "sequencia de comandos", instruções que serão executadas de acordo com o comando
//* LEMBRAR DE PROCURAR O QUE É TEMPLATE SWING, as aspas