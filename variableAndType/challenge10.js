const prompt = require('prompt-sync')();

const rayon = Number(prompt('Entrez le rayon : '));
const PI= 3.14 ;
let volume = (4/3)*PI*(rayon**3);
console.log(volume);

