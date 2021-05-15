function doSomething(){
    throw { error: "msg d'erreur", code: -42}
}

doSomething(); // uncaught { error: "sg d'erreur:", code 42} 

try {
    doSomething();
} catch (e) {
    console.log(e);
} finally { 
    console.log("finally");
}

// or : throw new Error();