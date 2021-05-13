let x = "lolo";
let y = "lala";
console.log(x.charAt(2));
console.log(x.concat(y));

var lolo = "lolololo"
var lo = "lo"
var la = "la"
console.log(lolo.includes(lo));
console.log(lolo.includes(la));
console.log(lolo.indexOf(lo,lolo.indexOf(lo)+1));
console.log(lolo.indexOf(la));

console.log(lolo.substring(2,4))
console.log(lolo.substr(2,4))

console.log(lolo.toUpperCase());
console.log(lolo.toLowerCase());

var lili = "   \t\nlola lola lola \n  ";
console.log(lili);
console.log(lili.trim());

console.log(lili.repeat(5));

console.log(lili.split(" "));
