const prompt = require('prompt-sync')();

const x1 = Number(prompt('Entrez le x de 1 er nombre : '));
const y1 = Number(prompt('Entrez le y de 1 er nombre : '));
const z1 = Number(prompt('Entrez le z de 1 er nombre : '));

const x2 = Number(prompt('Entrez le x de 2 eme nombre : '));
const y2 = Number(prompt('Entrez le y de 2 eme nombre : '));
const z2 = Number(prompt('Entrez le z de 2 eme nombre : '));

let distance = ( (x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2 )**(1/2);
console.log(distance);
