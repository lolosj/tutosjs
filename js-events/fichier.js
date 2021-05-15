var input1Element = document.getElementById("input1");
var input2Element = document.getElementById("input2");
var resultElement = document.getElementById("result");

function isNumber(input) {
    if(input === '')
        return false;
    let regex = new RegExp(/[^0-9]/, 'g');
    return (input.match(regex) === null);
}

function addFunction() {
    var resultat = 0;
    var input1Value = 0;
    var input2Value = 0;

    if (isNumber(input1.value)) {
        input1Value = Number(input1.value);
    } 
    if (isNumber(input2.value)) {
        input2Value = Number(input2.value);
    } 

    resultat = input1Value + input2Value
    resultElement.innerHTML = resultat;
  }

input1Element.addEventListener("input", addFunction);
input2Element.addEventListener("input", addFunction);

