// Utilizando módulo no npm
const minimist = require("minimist");

// Utilizando módulo do mode "core modules"
const fs = require("fs");

// Utilizando módulo interno
const moduloSoma = require("../modulo_interno.js");

// Variavel para guardar os argumentos passados.
const args = minimist(process.argv.slice(2));

const funcSoma = moduloSoma.soma;

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

const resultado = funcSoma(a, b);

fs.writeFile("resultado.txt", resultado, "utf8", (erro, dados) => {
    if(erro) {
        console.log("Deu erro ai ô");
    } else {
        console.log("deu bom");
    }
})