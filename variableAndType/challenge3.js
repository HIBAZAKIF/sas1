const prompt = require('prompt-sync')();

const kilomètres = Number( prompt('entrer la distance en kilomètres : ') );
const yards = kilomètres * 1093.61 ;

console.log(yards);