
//dontexist;
try {
    existePas;
} catch {
    console.log("catch");
} finally {
    console.log("finaly");
}

/*
try {
    existePas; // uncuaght ref error
} finally { // catch not mandotory
    console.log("finaly");
}*/

try {
    existePas;
} catch(e) {
    console.log("catch", e); // e content la ref de l'erreur
} finally {
    console.log("finaly");
}
