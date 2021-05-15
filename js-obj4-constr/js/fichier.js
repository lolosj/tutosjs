function User(name){
    console.log("this = ", this);
    this.name = name;
    console.log("this = ", this);
}

let me = new User("lolo");
let you = new User("lala");
