function fun(x, y){
    console.log(this);
}

fun();
fun(1,2,3);

let lolo = { 
    name: "lolo",
    fun: function(){
        console.log(this.name);
    }    
}

lolo.fun();