

console.log(`Q1.write a function expression to get square of the number`);
var multiplication = function (one,two) {
    var result = one*two;
    return `squre of 5 is: ${result}`;
}
var result = multiplication(5, 5);
console.log(result);

var multiplication = function(one,two) {
    result = one*two;
    return `squre of 6 is: ${result}`;
}
var result = multiplication(6,6);
console.log(result);

var multiplication = function (one,two){
    var result = one*two;
    return`square of 25 is: ${result}`;
}
var result = multiplication(25,25);
console.log(result);

var multiplication = function (one,two){
    var result = one*two;
    return`square of 100 is: ${result}`;
}
var result = multiplication(100,100);
console.log(result);

var areaOfPlot = function (lenght,width){
    var result = lenght*width;
    return`Q2.Area of rectangle plot is: ${result}`;
}
var result = areaOfPlot(499,917);
console.log(result);

console.log(`Q3.write a FE before swap and after swap`);
var swapValues = function(a,b){
    console.log("Before swap: a =", a ,", b =",b);

    var temp = a;
    a = b;
    b = temp;
    console.log("After swap: a =", a ,", b =",b);
};
swapValues("virat","anushka");

console.log(`Q4.write a Function`)

var getTotalCharacters = function(Apurva) {
    return Apurva.length;
};
  
var sentence = "java script is the most popular language of internet";
var totalChars = getTotalCharacters(sentence);
console.log("Total Characters:", totalChars);

var indexChar = sentence.charAt(6);
console.log("character at index 6 is:", indexChar);

var indexChar = sentence.charAt(11);
console.log("character at index 11 is:",indexChar);

var indexChar = sentence.charAt(sentence.length-1);
console.log("last character is:", indexChar);

var indexChar = sentence.charAt(0);
console.log("first character at zero index is:",indexChar);

var indexofword = sentence.split(" ");
console.log("Total word is:",indexofword.length);

var multiplication = function(num1,num2){
    var result = num1*num2
    return`square of 9 is: ${result}`;
}
var result = multiplication(9,9);
console.log(result);

console.log(`Q5.Type of Function`)
var variableName = function(){

}
var myFunction = typeof variableName;
console.log("Type of function:",myFunction);