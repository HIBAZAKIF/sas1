const prompt = require('prompt-sync')();

const a = Number( prompt('entrez le 1 er nbr ') );
const b = Number( prompt('entrez le 2 eme nbr ') );

let sum = a+b ;
let sous = a-b ;
let mult = a*b ;
let div = a/b ;

console.log(`la somme des 2 nombres : ${sum} , la soustraction des 2 nombres : ${sous} , la multiplication des 2 nombres : ${mult} , la division des 2 nombres ${div}`);

