var tema = [];
var i = 0;
var sorteados = [];
//var valorMaximo = 16;
window.onload = function() {
   tema = ["Pseudo-código","POO", "Teste Caixa-Preta", "Teste Caixa-Branca", "Java", "C++", "C", "Testes Funcionais", 
   "Teste de Não Funcionais", "Validação e Verificação", "Cenário de Teste", 
   "Paradigmas de Programação", "Diagrama de Classe", "Operadores lógicos", "Leitura e Interpretação", 
   "Estrutura de Dados"];
}
exibir = function(id)
{
    i = criarUnico();
    document.getElementById(id).innerHTML = "<h2>" + tema[i] + "</h2>";
    document.getElementById(id).classList.remove('cartao');  
    document.getElementById(id).classList.add('texto');  
    var j = 0;
    var novo = [];
    var cont = 0;
    while(j < tema.length){
        if((j < i) || (j > i)) 
        {
            novo[cont] = tema[j];
            cont++;
            j++;
        }  
        else{
            j++;
        }            
    } 
    tema = novo;
   // i++;
}

function criarUnico() {
    var sorteados = [];
    var valorMaximo = tema.length-1;
    if (sorteados.length == tema.length) {
        if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
        else return;
    }
    var sugestao = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
    while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
        sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
    return sugestao; // devolver o numero único
}