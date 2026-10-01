// Switch Case 

/*
const opcao = Number(prompt("1 - Cadastrar | 2 - Consultar"));

switch (opcao){
    case 1:
        console.log("Cadastrar");
        break;
    
    case 2:
        console.log("Consultar");
        break;
    
    default:
        console.log("Opção invalida!");
}
*/

// Exercício 16 — Menu de opções
// Crie um menu com 3 opções: 1 para cadastrar, 2 para listar e 3 para sair. Utilize switch.

let continuar = true; // variável usada para controlar se o while deve continuar executando

while (continuar){
    const opc = Number(prompt("1 - Cadastrar | 2 - Listar | 3 - Sair"));

    switch (opc){
        case 1:
            console.log("Cadastrar..");
            continuar = false; // muda para false para encerrar o while
            break; // esse break é temporario por motivo de nao precisar fazer uma parte do cadastro nesse momento pois é um exercicio apenas para pegar o switch case
            
        case 2:
            console.log("Listar..");
            continuar = false; // muda para false para encerrar o while
            break; // esse break segue o mesmo exemplo do de cima 
            
        case 3:
            console.log("Saindo.....")
            continuar = false; // muda para false para encerrar o while
            break;

        default:
            const opc = Number(prompt("Opção invalida por favor digite novamente...\n1 - Cadastrar | 2 - Listar | 3 - Sair"));


    }
}


// Exercício 17 — Dias da semana
// Receba um número de 1 a 7 e mostre o dia da semana correspondente. Trate números inválidos.


const opc2 = Number(prompt("Digite um numero de 1 a 7 e descubra o dia da semana:"));

switch(opc2) {
    case 1:
        console.log("Segunda-feira");
        break;
    
    case 2:
        console.log("Terça-feira");
        break;

    case 3:
        console.log("Quarta-feira");
        break;
    
    case 4:
        console.log("Quinta-feira");
        break;

    case 5:
        console.log("Sexta-feira");
        break;

    case 6:
        console.log("Sabado");
        break;
    
    case 7:
        console.log("Domingo");
        break;
    
    default:
        console.log("Opção invalida")
        break;
    
}

// Exercício 18 — Calculadora
// Receba dois números e uma operação (+, -, * ou /). Use switch para escolher a operação e trate a divisão por zero.


const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

const operacao = Number(prompt("1 - Adição | 2 - Subtração | 3 - Multiplicação | 4 - Divisão"));


switch(operacao){
    case 1:
        const resultado1 = numero1 + numero2;
        console.log("O resultado de",numero1,"+",numero2,"=",resultado1);
        break;

    case 2:
        const resultado2 = numero1 - numero2;
        console.log("O resultado de",numero1,"-",numero2,"=",resultado2);
        break;

    case 3:
        const resultado3 = numero1 * numero2;
        console.log("O resultado de",numero1,"X",numero2,"=",resultado3);
        break;

    case 4:
        if(numero2 === 0){
        console.log("Imposivel fazer divisao por 0")
        break;
        }
        const resultado4 = numero1 / numero2;
        console.log("O resultado de",numero1,"/",numero2,"=",resultado4.toFixed(5));
        break;

    default:
        console.log("Opção invalida...")
}

