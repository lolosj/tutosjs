function parcourir_et_afficher(t) {
    for (let i = 0; i < t.length; i++) {
        console.log(t[i]);
    }
}
    

var t = [1,2,3];
parcourir_et_afficher(t);
t.length = 30;
parcourir_et_afficher(t);

t = [1,2,3];
parcourir_et_afficher(t);
t[100] = "a";
parcourir_et_afficher(t);
console.log(t.length);