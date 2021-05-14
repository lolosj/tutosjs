let arrow = () => this;
console.log(arrow());

let newFuncArrow = arrow.bind("hello");
console.log(newFuncArrow()); // this = window obj. Cant change value of this with arrow funcs.
