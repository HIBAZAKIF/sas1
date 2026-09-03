const prompt = require('prompt-sync')();

const a = Number(prompt("entrer un nbr a : "));
const b = Number(prompt("entrer un nbr b : "));

function somme(c,d){
    return a+b;
}
let resultat = somme(a,b);
console.log(resultat);