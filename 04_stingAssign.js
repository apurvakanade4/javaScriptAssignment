


console.log("             Assignment-1");
console.log("");
console.log("-----------1.My dream company name is:----------");

var companyName = "Capgimini";
var companyName = companyName;

var hobby1 = "Travelling";
var hobby2 = "Dancing";
var hobby3 = "Programing";

function stringBasics() {
    console.log("My dream company name is:-", companyName);
console.log("--------------2.My Hobbies are:-----------------");
    console.log("My Hobbies are:", hobby1,hobby2,hobby3);
console.log("------------------------------------------------");
    console.log("2.2 Total number of character are:-");
var hobby1lenght = hobby1.length;
console.log("Total character lenght hobby1:", hobby1lenght);
var hobby2lenght = hobby2.length;
console.log("Total character lenght hobby2:", hobby2lenght);
var hobby3lenght = hobby3.length;
console.log("Total character lenght hobby3:", hobby3lenght);
}
stringBasics();
console.log("");
console.log("           Assignment-2");

var Name = "  Hey you are doing goog, keep it up   "
function stringHandsOn() {
console.log("1. Print the string as it is on console:-",Name);
var Namelenght = Name.length;
console.log("2. total lenght:-", Namelenght);

   
var trimmedName = Name.trim();
var lenghtAfterTrim = trimmedName.length;
console.log("3. After remove the leading and trailing extra spaces:-",trimmedName.length);
console.log("4. Total Number of Removed Extra Space count are:-", Namelenght-lenghtAfterTrim);

var trimmedName = Name.trim();
var charAtZeroIndex = trimmedName.charAt(0);
var charAtLastIndex = trimmedName.charAt(trimmedName.length-1)
console.log("5. First and Last character of string after trim are:" ,charAtZeroIndex,charAtLastIndex);
}
stringHandsOn();




