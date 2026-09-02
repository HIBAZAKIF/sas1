const prompt = require('prompt-sync')();

const date = prompt("entrer une date : ");
let date_array = [];
let sum_ch = "" ;
let mois = null;
let compteur = 1;


// 12/12/2020
// xx/xx/xxxx

for (const ch of date ) {

     if (ch === "/"){
        date_array.push(sum_ch);
        sum_ch="";
        compteur++;
        continue;
    }else {
        sum_ch  = sum_ch + ch ;
        if(compteur == date.length){
            date_array.push(sum_ch);
        }       
    }compteur++;
    
    

}
switch(date_array[1]){
    case "01":
        mois = "janvier";
        break;
    case "02":
        mois = "fevrier";
        break;
    case "03":
        mois = "mars";
        break;
    case "04":
        mois = "avril";
        break;
    case "05":
        mois = "mai";
        break;
    case "06":
        mois = "juin";
        break;
    case "07":
        mois = "juillet";
        break;
    case "08":
        mois = "aout";
        break;
    case "09":
        mois = "septembre";
        break;
    case "10":
        mois = "octembre";
        break;
    case "11":
        mois = "novembre";
        break;
    case "12":
        mois = "decembre";
        break;
}
console.log(`${date_array[0]}-${mois}-${date_array[2]}`);

