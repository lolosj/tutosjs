function User(name){
    this.name = name;
    this.sayMyName = function() { // cette methode est copiee pour chaque instance de user
        console.log(this.name);
    }
} 

User.prototype.sayMyName2 = function(){ // cette methode est copiee 1 seule fois et chaque obj y a acces == moins de memory
    console.log(this.name);
}

let me = new User("lolo");
me.sayMyName();
me.sayMyName2();