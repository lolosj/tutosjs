var x = 5;
console.log(typeof x);
console.log(typeof x.toString());
console.log(typeof x);
x = x.toString();
console.log(typeof x);

{
    let x = 5.5687;
    console.log(x.toFixed(3));

    let y = 56534563456;
    console.log(y.toLocaleString());

}

{
    let x = 123;
    let y = new Number(123);
    console.log(x);
    console.log(y);

    console.log(typeof x);
    console.log(typeof y);
    console.log(typeof y.valueOf());
}