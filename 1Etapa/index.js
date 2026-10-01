// Lógica em JavaScript 

// Variaveis
// const - constante, não pode ser alterada
// let - variável, pode ser alterada
/*
 const nome = "Eduardo";
 let idade = 18;
 let altura = 1.75;

idade = 19;

console.log(nome);
console.log(idade);
console.log(altura);
*/

// Exercicio 1 — Cadastro pessoal
// Crie variáveis para armazenar seu nome, idade, altura e se você está estudando programação. Depois, mostre todas elas no console.

const nome = "Eduardo";
let idade = 19;
let altura = 1.75;
const estudandoProgramacao = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Estudando programação:", estudandoProgramacao);

// Exercicio 2 — Calculadora de salário
// Crie uma variável com seu salário mensal e outra com o valor de um bônus. Calcule o salário total e mostre o resultado.

const salarioMensal = 2500;
const bonus = 300;

const salarioFinal = salarioMensal + bonus;

console.log("Salário final:", salarioFinal);

// Exercício 3 — Atualização de pontos
// Crie uma variável pontos começando em 100. Adicione 50 pontos e depois retire 30. Mostre o resultado final.

let pontos = 100;
pontos += 50;
pontos -= 30;

console.log("Valor final de pontos:", pontos);

// Entrada e saída de dados
// prompt() - função para entrada de dados igual no python o input()
// e tambem o prompt() funciona no navegador. Se estiver executando JavaScript com Node.js no terminal, a entrada de dados é diferente.

/*
const nome1 = prompt("Digite seu nome:");

console.log("Olá, " + nome1);


// Para receber um número, lembre-se de que prompt() retorna texto. Use Number() para converter:
const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

const soma = numero1 + numero2;

console.log("Resultado: " + soma);
*/

// Exercício 4 — Apresentação
// Peça o nome e a idade do usuário e mostre uma mensagem de apresentação.
const nome2 = prompt("Digite seu nome:");
let idade2 = Number(prompt("Digite sua idade:"));

console.log("Meu nome é", nome2);
console.log("E tenho", idade2, "anos de idade");


// Exercício 5 — Soma de números
// Peça dois números ao usuário e mostre a soma deles.

const n1 = Number(prompt("Digite o primeiro número: "))
const n2 = Number(prompt("Digite o segundo número: "))

const n3 = n1 + n2

console.log("A soma dos dois números digitados foi de: ", n3);


// Exercício 6 — Média escolar
// Peça três notas, calcule a média e mostre o resultado.

const nota1 = Number(prompt("Digite a primeira nota"));
const nota2 = Number(prompt("Digite a segunda nota"));
const nota3 = Number(prompt("Digite a terceira nota"));

const media = (nota1 + nota2 + nota3) / 3

// .toFixed(2) ele é usado para aparecer apenas duas casas decimais 
console.log("A média das notas foi de: ", media.toFixed(2));
