var x, y, resultat;
var test = 0.123

x = prompt('x = ?')
y = prompt('y = ?')

resultat = x + y 
alert("avant cast: " + resultat + " " + typeof resultat);

resultat = Number(x) + Number(y) 
alert("apres cast: " + resultat + " " + typeof resultat);


resultat = Number(x+y)
alert("test: " + resultat + " " + typeof resultat);

console.log(typeof test)
