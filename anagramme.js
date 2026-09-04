const prompt = require('prompt-sync')();

const nom1 = prompt('entrer un nom ? ');
const nom2 = prompt('entrer un autre nom ? ');
let tab1 = [];
let tab2 = [];
let secours = null ;

if(nom1.length == nom2.length){
    for(let ch of nom1){
        tab1.push(ch.charCodeAt(0));
    }
    for(let ch of nom2){
        tab2.push(ch.charCodeAt(0));
    }

    for(let i = 0 ; i <= tab1.length ; i++){
        for (let j = 0 ; j <= tab1.length - i ; j++){
            if ( tab1[j] > tab1[j+1] ){
                secours = tab1[j];
                tab1[j] = tab1[j+1];
                tab1[j+1] = secours;
            }

            if ( tab2[j] > tab2[j+1] ){
                secours = tab2[j];
                tab2[j] = tab2[j+1];
                tab2[j+1] = secours;
            }
        }
    }

    for (let i = 0 ; i <= tab1.length ; i++ ){
        if (tab1[i] !== tab2[i]){
            console.log("les mots sont pas anagrammes");
            break;
        }else if(i == tab1.length){
                
            console.log('les mots sont anagrammes');
        }
    }

}else{
    console.log("les mots sont pas anagrammes")
}
