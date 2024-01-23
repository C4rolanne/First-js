// variáveis
var nomeHeroi = "Jessica" 
var xpHeroi = "10000"; 

// 'nomeHeroi': Esta variável armazena o nome do herói. Em JavaScript, você declara variáveis usando a palavra-chave 'var'seguida pelo nome da váriavel. Aqui, 'nomeHeroi'é atribuido o valor "Superman", que é uam string. 

// Estrutura de Decisão

var nivelHeroi; 

if (xpHeroi < 1000) { 
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if ( xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante;"
}


// Saída

console.log("Parabéns! O herói " + nomeHeroi + " atingiu o nível " + nivelHeroi + " com " + xpHeroi + " pontos de experiência. ");
