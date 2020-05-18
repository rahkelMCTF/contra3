var tema = [];
var i = 0;
var sorteados = [];
//var valorMaximo = 16;
var equipes = [];
window.onload = function() {
   tema = ["Pseudo-código","POO", "Teste Caixa-Preta", "Teste Caixa-Branca", "Java", "C++", "C", "Testes Funcionais", 
   "Teste de Não Funcionais", "Validação e Verificação", "Cenário de Teste", 
   "Paradigmas de Programação", "Diagrama de Classe", "Operadores lógicos", "Leitura e Interpretação", 
   "Estrutura de Dados", "Engenharia de Requisitos", "Diagrama de Atividades", "Diagramas de Casos de Uso", 
   "Diagramas de Classes", "Ciclos de vida de Processos"];
   equipes = ["Equipe1", "Equipe2", "Equipe3", "Equipe4", "Equipe5"];
}
exibir = function(id)
{
    i = criarUnico(tema.length);
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

sortearEquipe = function(){
    var e = criarUnico(equipes.length);
    document.getElementById("equipe").classList.remove('cartao');  
    document.getElementById("equipe").classList.add('texto');  
    document.getElementById("equipe").innerHTML= "<h1>" + equipes[e] + "</h1>";
}

function criarUnico(tam) {
    var sorteados = [];
    var valorMaximo = tam-1;
    if (sorteados.length == tam) {
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
