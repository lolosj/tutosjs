var ajd = new Date();
console.log(typeof ajd);
console.log(ajd);
ajd = new Date(10000000);
console.log(ajd);
console.log(Date.now());


var myDate = new Date(Date.now());
console.log(myDate);



var start = Date.now();
for (let i = 0; i < 10000000; i++){
    // rien
    
}
var end = Date.now();

console.log(end-start);

let before = new Date(1983,10,09);
let now = new Date(Date.now());

console.log(Math.floor((now - before) / (1000*60*60*24)) + " days");

