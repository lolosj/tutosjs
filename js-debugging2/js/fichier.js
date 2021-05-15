function fact(x){
    if (x == 0 || x == 1)
        return 1;
    let total = 1;
    for (i = x; i >= 1; i--){
        total *= i;
    }
    return total;
}

function someFunc(){
    console.log("some Func, clicked");
}


document.getElementById("someid").onclick = someFunc;

