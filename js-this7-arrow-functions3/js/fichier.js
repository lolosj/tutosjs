let arrowFun = () => this;
function normalFun(){
    return this;
}


let functions = { 
    arrow: arrowFun,
    normal: normalFun,
    arrowInsideObject: () => this
}

console.log(functions.normal());
console.log(functions.arrow()); // so here this = window object
console.log(functions.arrowInsideObject()); // attention, meme si arrow fun inside obj, this = window obj
// because "this" = window object a linterieur dun obj -->

let x = {
    thisValue: this
}

console.log("!!!" + x.thisValue); // = window object