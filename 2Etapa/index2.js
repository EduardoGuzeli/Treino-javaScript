// Estruturas condicionais

/*
const idade = Number(prompt("Digite sua idade: "));

if(idade >= 18) {
    console.log("Maior de idade");
}else {
    console.log("Menor de idade");
}

const nota = Number(prompt("Digite sua nota:"));

if (nota >= 9){
    console.log("A sua nota foi de", nota, "foi Exelente");
}else if (nota >=7){
    console.log("Você foi aprovado a sua nota foi: ", nota);
}else if (nota >=5){
    console.log("Infelizmente você ta de recuperação com a nota:", nota);
}else {
    console.log("Com a nota:", nota, "você está reprovado");
}
*/

// Exercício 7 — Par ou ímpar
// Receba um número e informe se ele é par ou ímpar.
const numero = Number(prompt("Digite um número para descobrir se ele é impar ou par:"));

if (numero/2==0){
    console.log("O número:", numero, "é par");
}else{
    console.log("O número:", numero, "é impar");
}

// Exercício 8 — Aprovação
// Receba três notas, calcule a média e informe se o aluno foi aprovado (média maior ou igual a 7) ou reprovado.

const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota"));
const nota3 = Number(prompt("Digite a terceira nota"));

const media = (nota1 + nota2 + nota3) / 3

if (media >=7){
    console.log("A sua media foi: ", media.toFixed(2), ", você está APROVADO!");
}else{
    console.log("A sua media foi: ", media.toFixed(2), ", você está REPROVADO!");
}

// Exercício 9 — Maior número
// Receba dois números e informe qual é o maior ou se são iguais.

const n1 = Number(prompt("Digite o primeiro número para ver qual é maior"));
const n2 = Number(prompt("Digite o segundo número para descobrir qual é maior"));

if (n1 > n2){
    console.log("O primeiro número:", n1, "é maior que o segundo:",n2);
}else if (n2 >n1){
    console.log("O segundo número:", n2, " é maior que o primeiro:",n1);
}else{
    console.log("Os dois números são iguais:", n1)
}