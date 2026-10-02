// Listas — arrays
/*
const frutas = ["maçã", "banana", "uva"];

frutas.push("laranja"); // push tem a mesma função do append do python

console.log(frutas[0]);
console.log(frutas.length);
*/


// Exercício 19 — Lista de compras
// Crie um array com 5 produtos, adicione mais um, remova um produto e mostre a lista final.

const nomes = ["Eduardo", "Gabriel", "Marcos", "Daniel", "Leticia"];
nomes.push("Alexandre");
nomes.pop(); // pop pra eliminar o ultimo e .shift para eliminar o primeiro 
console.log(nomes);


// Exercício 20 — Maior valor
// Crie um array com 10 números e descubra qual é o maior número sem usar Math.max().



// 1. Criando o array com 10 números
const numeros = [1, 65, 3, 213, 75, 53, 65, 34, 65, 23];
// 2. Assumindo que o primeiro número é o maior inicialmente
let maiorNumero = numeros[0];

// 3. Percorrendo o array para comparar os valores
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]; // Atualiza o maior número encontrado
    }
}

console.log("O maior número é:", maiorNumero);


// Exercício 21 — Média de notas
// Armazene 5 notas em um array, calcule a média usando repetição e mostre o resultado.