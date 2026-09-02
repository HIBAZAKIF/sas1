const prompt = require('prompt-sync')();

let nbr1 = Number(prompt("entrer le 1er nbr : "));
let nbr2 = Number(prompt("entrer le 2eme nbr : "));
let nbr3 = nbr1 ;

console.log(`avant léchange , nbr1 est ${nbr1} , nbr2 est ${nbr2} }`);

nbr1 = nbr2;
nbr2 = nbr3;


console.log(`Apres léchange , nbr1 est ${nbr1} , nbr2 est ${nbr2} }`);