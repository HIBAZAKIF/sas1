const prompt = require('prompt-sync')();

const a = Number(prompt('Entrez le 1eme nombre : '));
const b = Number(prompt('Entrez le 2eme nombre : '));
const c = Number(prompt('Entrez le 3eme nombre : '));

let moyenneGeometrique = (a*b*c)**(1/3);
console.log(moyenneGeometrique);
