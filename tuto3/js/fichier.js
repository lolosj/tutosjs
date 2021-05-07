var x, y, resultat;
x = prompt('x = ?')
y = prompt('y = ?')

resultat = x + y 
alert("avant cast: " + resultat + " " + typeof resultat);

resultat = Number(x) + Number(y) 
alert("apres cast: " + resultat + " " + typeof resultat);


resultat = Number(x+y)
alert("test: " + resultat + " " + typeof resultat);


