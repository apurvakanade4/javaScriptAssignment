

console.log("=========Assignment-1=========");
var myDreamCompanyIs = "Capgemini";
var myHobbiesAre = "Coding,Trecking,Dancing"
function stringBasics(){
    console.log("My Dream company Is:",myDreamCompanyIs);
    console.log("My Hobbies are:",myHobbiesAre);
    console.log("My Hobbies are:",myHobbiesAre.length);
}    
stringBasics();

console.log("=========Assignment-2=========");
console.log("---------Step-1--------");
function stringHandsOn() {
    var str = "     Hey you doing good, keep it up      ";
    console.log(`Given String is: ${str}`);
    console.log("---------Step-2--------");
    var str = "     Hey you doing good, keep it up      ";
    console.log(`Lenght of Given string is: ${str.length}`);
    console.log("---------Step-3--------");
    var afterTrim =  "Hey you doing good, keep it up";
    console.log(`After Trim with its lenght: ${afterTrim.trim()} ${afterTrim.length}`);
    console.log("---------Step-4--------");
    var afterTrim = "Hey you doing good, keep it up";
    console.log(`Total No. of extra spaces in string: ${str.length-afterTrim.length}`);
    console.log("---------Step-5--------");
    var afterTrim ="Hey you doing good, keep it up";
    console.log(`First and Last character:${afterTrim.charAt(0)} ${afterTrim.charAt(29)}`);
    console.log("---------Step-6--------");
    var afterTrim = "Hey you doing good, rtkeep it up";
    console.log(`Count of Total words:${afterTrim.length}`);
    console.log("---------Step-7--------");
    var afterTrim = "Hey you doing good, keep it up";
    console.log(`Index of word Good:${afterTrim.indexOf("good")}`);
    console.log("---------Step-8--------");
    var str = "     Hey you doing good, keep it up      ";
    console.log(`Substring of starting Index:${str.substring("24")}`);

    var str = "     Hey you doing good, keep it up      ";
    console.log(`Slice of starting Index:${str.slice("24")}`);
    console.log("---------Step-9--------");
    var afterTrim = "Hey you doing good, keep it up";
    console.log(`Ends with up:${afterTrim.endsWith("up")}`);
    console.log("---------Step-10--------");
    var afterTrim = "Hey you doing good, keep it up";
    console.log(`Start with Hey:${afterTrim.startsWith("Hey")}`);

    
}
stringHandsOn();