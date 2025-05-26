const fs = require("fs");

// console.log(fs);

// // READ
// fs.readFile("teste.txt", "utf8", (erro, dados) => {
//     if(erro) {
//         console.log(erro);
//     } else {
//         console.log(dados);
//     }
// });

// Escrever
// const mensagem = "I get higher than murder rate, oh shit, shut the fuck up I can't concentrate";

// fs.writeFile("teste2.txt", mensagem, "utf8", ((erro) => {
//     if (erro) {
//         console.log("Deu erro ai ô");
//     } else {
//         console.log("Arquivo gerado.");
//     }
// }));

// Update
// const mensagem2 = "\nOh shit, I've been working on night and day, your bitch swallow all my kids."

// fs.appendFile("teste2.txt", mensagem2, "utf8", (erro) => {
//     if (erro) {
//         console.log("Deu erro ai ô");
//     } else {
//         console.log("Texto adicionado.");
//     }
// })

fs.unlink("teste2.txt", (erro) => {
    if (erro) {
        console.log("Deu erro ai ô");
    } else {
        console.log("Deletadus expiradus");
    }
});