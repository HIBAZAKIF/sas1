const prompt = require('prompt-sync')();

const temperature = Number( prompt('Quel est la température ? ') );
let k = temperature + 273.15;
console.log(k);