const prompt = require('prompt-sync')();

const longueur = Number(prompt('Entrez la longueur  : '));
const largeur = Number(prompt('Entrez la largeur  : '));

let surface = longueur*largeur ;
console.log(surface);

