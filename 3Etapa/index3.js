// Estrutura de repetição
// Exemplo com for:

/*
for (let i = 1; i <= 5; i++){
    console.log(i);
}

// Exemplo com while:

let contador = 1;

while (contador <= 5){
    console.log(contador);
    contador++;
}
*/

// Exercício 10 — Contagem
// Mostre os números de 1 até 100 usando for.

for (let i = 1; i <=100; i++){
    console.log(i)
}

// Exercício 11 — Tabuada
// Peça um número ao usuário e mostre sua tabuada de 1 a 10.
const numero = Number(prompt("Digite um numero de 1 a 10 para ver a tabuada:"));

for (let j =  1; j <= 10; j++){
    console.log(numero,"x",j,"=",numero*j)
}

// Exercício 12 — Soma acumulada
// Receba 5 números do usuário e, no final, mostre a soma de todos eles. Use uma estrutura de repetição.

let resultadoNumeros = 0;

for (let k = 1; k <=5; k++){
    let numeros = Number(prompt("Digite 5 números"));

    resultadoNumeros += numeros;
}
console.log("A soma dos números é:", resultadoNumeros);

// Exercício 13 — Contagem regressiva
// Use while para mostrar os números de 10 até 1.

let contador1 = 1;

while (contador1 <=10){
    console.log(contador1);
    contador1++;
}

// Exercício 14 — Soma até zero
// Peça números ao usuário repetidamente.
// Enquanto o usuário não digitar 0, continue pedindo.
// Quando digitar 0, pare.
// No final, mostre a soma de todos os números digitados.

let contador = 0;
let somaNumerosResposta = 0;
while (true){
    let resposta = Number(prompt("Digite números para ver a soma deles e digite (0) caso deseje parar:"));

    somaNumerosResposta += resposta;

    if (resposta == 0){
        break
    }
}
console.log("A soma dos números digitados é de:",somaNumerosResposta)

// Exercício 15 — Senha
// Peça a senha ao usuário usando while.
// Se estiver errada → "Senha incorreta"
// Se estiver certa → "Acesso permitido"
// O programa só termina quando a senha estiver correta.

const senhaCorreta = "abcd"
let contador2 = 0;
while(true){
    let senha =prompt("Digite a senha, quando estiver correta o sistema encerra,(apenas letras):");
    if (senha == senhaCorreta){
        console.log("Senha correta... bem vindo!");
        break
    }else{
        console.log("Senha incorreta",senha,", digite novamente..")
    }
}