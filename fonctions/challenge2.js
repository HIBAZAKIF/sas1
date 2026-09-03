const prompt = require('prompt-sync')();

const nbr1 = Number(prompt("entrer un nbr : "));
const nbr2 = Number(prompt("entrer un nbr a : "));

function produit(c,d){
    return c*d;
}
let resultat = produit(nbr1,nbr2);
console.log(resultat);