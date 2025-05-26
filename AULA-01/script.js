// console.log("I get higher than murder rate.");

// let a = 990;
// let b = 9;

// console.log(a + b);

// let itGo = "Elsa";

// console.log(`O nome da princesa de gelo é ${itGo}`)

// console.log(process.argv);

// "Guarda informações"
// let argumentos = process.argv.slice(2);

// console.log(argumentos);

// let alimento = argumentos[0].split("=")
// console.log(alimento);

// Faz a requisição das funções no diretorio.
const moduloImportado = require("./modulo_interno.js");

// Escreve as funções.
console.log(moduloImportado);

// Extraindo as funções especificas do moduloImportado.
let soma = moduloImportado.soma;
let subtracao = moduloImportado.subtracao;
let divisao = moduloImportado.divisao;
let multiplicacao = moduloImportado.multiplicacao;

// Chamando a função de soma.
soma(555, 444);
subtracao(1555, 556);
divisao(1998, 2);
multiplicacao(333, 3);