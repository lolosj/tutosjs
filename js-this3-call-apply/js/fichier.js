function fun(input1, input2){
    console.log(input1, input2);
    console.log(this);
}

fun(5, 2);
fun.call("hello this", 5, 2); // this = "hello this"

fun.apply("hello this", [5, 2]); // same buts args = array
