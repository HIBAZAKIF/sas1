const prompt = require('prompt-sync')();

const nbr1 = Number(prompt("entrer le 1er nbr : "));
const nbr2 = Number(prompt("entrer le 2eme nbr : "));

let sum = nbr1 + nbr2 ;
let dif = nbr1 - nbr2;
let pro = nbr1 * nbr2;
let quo = nbr1 / nbr2;

console.log(`leur somme : ${sum} , leur difference : ${dif} , leur produit : ${pro} , leur quotien : ${quo}`);