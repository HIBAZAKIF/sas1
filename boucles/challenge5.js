const prompt = require('prompt-sync')();

const base = Number(prompt("entrer une base : "));
const exposant = Number(prompt("entrer un exposant : "));

let resultat = base**exposant;

console.log(resultat);