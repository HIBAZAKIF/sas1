const prompt = require('prompt-sync')();

const nbr1 = Number(prompt('Entrez le 1er nombre : '));
const nbr2 = Number(prompt('Entrez le 2eme nombre : '));
const nbr3 = Number(prompt('Entrez le 3eme nombre : '));

let pon1 = 2 ;
let pon2 = 3 ;
let pon3 = 5 ;

let moyennePondérée = ((nbr1*pon1)  + (nbr2*pon2) + (nbr3*pon3) )/(pon1 + pon2 + pon3);

console.log(moyennePondérée);
