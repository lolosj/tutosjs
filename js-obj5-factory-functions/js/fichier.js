function User(name){
    this.name = name;
} 

function User2(name){
    let person = {
        name: name
    }
    return person;
}
let me = new User("lolo");
let you = User2("lala");
console.log(me, you);