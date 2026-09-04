const prompt = require('prompt-sync')();

const nom = prompt('Quel est votre nom ? ');
let compteur = 0 ;
let condition = true;
// typeof(ch) == undefined
while(condition){
    if(nom[compteur] == undefined){
        condition = false;
        //break ;
    }else{
            compteur++;
    }


}

console.log(compteur)