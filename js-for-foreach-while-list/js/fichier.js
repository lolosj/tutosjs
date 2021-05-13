var listeDeTrucs = [1,2,3,4];
var i = 0;
console.log(typeof listeDeTrucs);
console.log(listeDeTrucs.length);
for (i = 0; i < listeDeTrucs.length; i++)
    console.log(listeDeTrucs[i]);

listeDeTrucs.forEach(truc => console.log(truc));

for (truc of listeDeTrucs)
    console.log(truc);

i = 0;
while (i < listeDeTrucs.length) {
    console.log(listeDeTrucs[i]);
    i++;
}