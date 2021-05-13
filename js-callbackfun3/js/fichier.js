function parcourir_et_afficher(t) {
    for (let i = 0; i < t.length; i++) {
        console.log(t[i]);
    }
}

function parcourir_et_afficher_types(t) {
    for (let i = 0; i < t.length; i++) {
        console.log(typeof t[i]);
    }
}

function parcourir_et_executer(t) {
    for (let i = 0; i < t.length; i++) {
        if (typeof t[i] == "function") { 
            t[i]();
        }
    }
}



var t = [1, "string", function(){console.log("coucou");} ,3];
parcourir_et_afficher(t);
parcourir_et_afficher_types(t);
parcourir_et_executer(t);

