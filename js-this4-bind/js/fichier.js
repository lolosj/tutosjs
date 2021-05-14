function fun(input1, input2){
    console.log(input1, input2);
    console.log(this);
}


let me = {
    name: "lolo"
}

var newFunction = 
fun.bind(me, 5, 2); // this = me

newFunction();