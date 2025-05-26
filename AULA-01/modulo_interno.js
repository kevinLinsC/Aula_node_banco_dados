module.exports = { 
    soma(a, b) {
        // return (`Soma: ${a} + ${b} = ${a + b}`).toString();
        const resultado = a + b;
        console.log("Soma: " + (a + b));
        return resultado.toString();
    },
    subtracao(a, b) {
        console.log(`Subtração: ${a} - ${b} = ${a - b}`);
    },
    divisao(a, b) {
        console.log(`Divisão: ${a} / ${b} = ${a / b}`);
    },
    multiplicacao(a, b) {
        console.log(`Multiplicação: ${a} * ${b} = ${a * b}`);
    },
};

// soma(990, 9);