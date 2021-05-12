function squareDeX(x) {
        return x*x;
}

let t = [squareDeX];

console.log(t[0](3));

squareDeX.description = "blabla";

let mathFunctions = {
    square : squareDeX
};

console.log(mathFunctions.square(3));

console.log(mathFunctions.square.description);


function callbackTest(executeMe){
   console.log( executeMe(3));
   console.log(executeMe.description);
}

callbackTest(squareDeX);

function returnAFunction(func){
    return func;
}

console.log(returnAFunction(squareDeX)(5));