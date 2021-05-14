function Constructeur(){
    console.log(this);
    this.name = "lolo";
    console.log(this);
}

function funDeclaredOutside(){
    console.log(this)
}

function funDeclaredOutsideStrictMode(){
    'use strict';
    console.log(this)
}


let lolo = { 
    name: "lolo",
    fun: function funDeclaredInside(){
        console.log(this);
    },
    fun2: funDeclaredOutside,
    fun3: funDeclaredOutsideStrictMode 
};

console.log(this);
lolo.fun(); // invok la function as a method : this = object the method is attached to
lolo.fun2(); // same 
lolo.fun3(); // same 
funDeclaredOutside(); // this = window obj
funDeclaredOutsideStrictMode(); // this = undefined car use strict

let truc = new Constructeur(); // this = the object (empty first)