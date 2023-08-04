

console.log("--------01.Two function with no argument and no return-------");
function firstFunction(){
console.log("firstFunction");
}
firstFunction();
function lastFunction(){
    console.log("lastFunction");
}
lastFunction();

console.log("----------02.personal details------");
var name1 = "Apurva";
var name2 = "Kanade";
var name3 = "PVVP";

function personalDetails(firstName,lastName,collegeName){
console.log("My personal Details is");
console.log("Name:" , firstName, lastName);
console.log("College Name:",collegeName);
}
personalDetails("Apurva","Kanade","PVVP")

console.log("----------03.Swap------");
var F1 = "Virat";
var F2 = "Anushka";

var F3 = "1000";
var F4 = "2000";
function swapValueDude(parameter1,parameter2){
    console.log("Before Swap...",parameter1,parameter2);
    var temp = parameter1;
    parameter1 = parameter2;
    parameter2 = temp;
    console.log("After Swap...",parameter1,parameter2 );
}
swapValueDude(F1,F2);
swapValueDude(F3,F4);

console.log("-----------04---------------");
var text1 = "hello ";
var text2 = "good ";
var text3 = "morning";

var num1 = "10.23";
var num1 = "600";
var num1 = "40";
function addThreeValue(arg1,arg2,arg3){
    var result = arg1 + arg2 + arg3;
    console.log("addition is:",result);
}
addThreeValue(10.23,600,40)
addThreeValue(text1,text2,text3)