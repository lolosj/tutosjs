var globalVar = 10;

function fonction(){
    var variableDansFonction = 50;
}

function fonction2() {
    console.log(typeof globalVar);
    console.log(typeof variableDansFonction);
}

fonction();
fonction2();