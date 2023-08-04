
var sweety = "sweety";
var cutie = "cutie";
//output --> sweety = sweety, cutie = cutie
console.log("Before swap..", "sweety:" , sweety, "cutie:" , cutie);

var temp = sweety;
sweety = cutie;
cutie = temp;
console.log("After swap..", "sweety:" , sweety, "cutie:" , cutie);

var num1 = 100;
var num2 = 200;
var num3 = 300;
//output --> num1 = 200, num2 = 300, num3 = 100
console.log("Before swap..", "num1=", num1, "num2=", num2, "num3=", num3);

var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log("After swap..", "num1=", num1, "num2=", num2, "num3=", num3);