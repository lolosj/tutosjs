var str = "lolo lala et lola t t";
var search = "t";
for (i = 0; i < str.length ; i++) {
    if (str[i] == search) {
        console.log(`trouve a ${i}`);
        break;
    }
}

var str = "lolxo lxala xet xlxoxla xt tx";
//var search = "t";
for (i = 0; i < str.length ; i++) {
    if (str[i] == "x") 
        continue;
    else 
       console.log(str[i]);
    
}