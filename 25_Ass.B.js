console.log("1.All Number Which are greater than 50");
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const newArrayNumber = arrayNumbers.filter( (currentValue) =>{
    return currentValue>50;
} );
console.log(newArrayNumber);

console.log("------------------------");
console.log("2.All even Number ");
const evenNumber = arrayNumbers.filter( (evenNumber) => {
    return evenNumber%2===0;
} );
console.log(evenNumber);

console.log("------------------------");
console.log("3.All odd Number ");
const oddNumber = arrayNumbers.filter((oddNumber) => {
    return oddNumber% 2 !== 0;
} );
console.log(oddNumber);

console.log("------------------------");
console.log("4.All multiply by 5 Number ");
const multiBy5 = arrayNumbers.filter((multiBy5) => {
    return multiBy5 %5 ===0
});
console.log(multiBy5);

console.log("------------------------");
console.log("5.All Number between 20 & 50 ");
const numBetween20And50 = arrayNumbers.filter((numBetween20And50) => {
    return numBetween20And50 >= 20 && numBetween20And50 <=50;
});
console.log(numBetween20And50);