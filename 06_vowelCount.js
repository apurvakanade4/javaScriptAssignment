// A E I O U
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good UI Developer")

vowelCount("I am very good UI Developer")
// WAP to get the sum of numbers from 1 to 5
let sum = function(){
    let totalSum = 0;
     for (let index = 1; index <=5; index++) {
        totalSum = index * index * index;
    }
     console.log(`Sum of first 5 numbers is : ${totalSum}`);
 }
 sum();
 let count = function(){
    let totalSum = 0;
     for (let index = 1; index <=1; index++) {
        totalSum = index * index * index;
    }
     console.log(`Sum of first 1 numbers is : ${totalSum}`);
 }
 count();
 let num = function(){
    let totalSum = 0;
     for (let index = 1; index <=2; index++) {
        totalSum = index * index * index;
    }
     console.log(`Sum of first 2 numbers is : ${totalSum}`);
 }
 num();
 let arg = function(){
    let totalSum = 0;
     for (let index = 1; index <=3; index++) {
        totalSum = index * index * index;
    }
     console.log(`Sum of first 3 numbers is : ${totalSum}`);
 }
 arg();
 let ind = function(){
    let totalSum = 0;
     for (let index = 1; index <=4; index++) {
        totalSum = index * index * index;
    }
     console.log(`Sum of first 4 numbers is : ${totalSum}`);
 }
 ind();