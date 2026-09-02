const prompt = require('prompt-sync')();

const nom = prompt('Quel est votre nom ? ');
const prenom = prompt('Quel est votre prenom ? ');
const age = prompt('Quel est votre age ? ');
const sexe = prompt('Quel est votre sexe ? ');
const email = prompt('Quel est votre email ? ');

console.log(` hello  ${nom} ${prenom} ${age} ${sexe} ${email}`) ;