function ajouterAFile(fileDat, item) {
    fileDat.push(item);
    return fileDat;
   }

var fileDattente = [1,2,3,4,5];

console.log(fileDattente);
ajouterAFile(fileDattente, 6);
console.log(fileDattente);
console.log(JSON.stringify(fileDattente));
