const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr : "));

let i = 1;
let paire = 1;
while (paire <= nbr){
    if (i % 2 == 0){
        console.log(i);
        paire++;
    }
    i++;
}