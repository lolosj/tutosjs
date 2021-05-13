var globalVar = 55;

function localScope(){
    var myVar = 5;
    console.log(myVar);
}


function localFun(){
    var globalVar = 11;
    console.log(globalVar);
}


localScope();
//console.log(myVar);

localFun();