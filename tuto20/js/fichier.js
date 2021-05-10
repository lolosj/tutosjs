var position = {
    x: 10,
    y: 20
};

var autre = position;

position.x = 30;
console.log(autre);

var lolo = {
    nom:"lolo",
    print: function(){
        console.log("Je m'appelle " + this.nom);
        console.log(`Je m'appelle ${this.nom}`);
    }
}

function print () {
    console.log(this);
}

lolo.print();
print();