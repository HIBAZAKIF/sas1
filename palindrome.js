const prompt = require('prompt-sync')();

const nom = prompt('Quel est votre nom ? ');
let mon = "";

let lenght = 0 ;
let condition = true;
while(condition){
    if(nom[lenght] == undefined){
        condition = false;
        //break ;
    }else{
            lenght++;
    }
}

for(let i = lenght-1 ; i >= 0 ; i--){
    mon = mon + nom[i];
}

if( mon == nom ){
    console.log("le mot est palindrome");
}else{
    console.log("le mot nest pas palindrome");
}
