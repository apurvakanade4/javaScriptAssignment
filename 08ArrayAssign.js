var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
let element0 = arrayFruits[0];
let element1 = arrayFruits[1];
console.log(`1. First and last element on log is: ${element0} and ${element1}`);  

console.log(`2. Add the element Papaya`);
arrayFruits.unshift("Papaya")
console.log(arrayFruits);

console.log(`3.Remove the element Mango:`);
let elementRemoved = arrayFruits.splice(4,1);
console.log(arrayFruits);

console.log(`4.Insert the element Pineapple:`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arrayFruits.push("Pineapple");
console.log(arrayFruits);

console.log(`5.Insert the element Dragon Fruit Before Water Melon:`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let insertElement = arrayFruits.splice(4,0,"Dragon Fruit")
console.log(arrayFruits);

console.log(`6.Replace an element Orange with Kiwi:`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arrayFruits.splice(1,1,"Kiwi")
console.log(arrayFruits);

console.log(`7.Log the element starting from Index 1 to 4:`);
var arrayFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arrayFruit.slice(1 , 4 )
console.log(arrayFruit);


var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`8.Select Last Three Element: ${arrayFruits.length-1}`);

console.log(`-----Assignment - B-----`);
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]
let element = arrayNumbers.length;
console.log(`1.Total Elements Available in Array is:${element}`);

let elementFirst = arrayNumbers[0];
let elementLast = arrayNumbers[arrayNumbers.length-1];
console.log(`2.First element in Array is: ${elementFirst}`);
console.log(`3.Last element in Array is: ${elementLast}`);

let elementThird = arrayNumbers[arrayNumbers.length-3];
console.log(`4.Third Last element in Array is: ${elementThird}`);

console.log(`5.All Even Number`);
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 ===0) {
        console.log(arrayNumbers[index]);
    } 
}
console.log(`6.All Odd Number`);
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 !==0) {
        console.log(arrayNumbers[index]);
    } 
}
var sum = 0;
for (let index = 1; index < arrayNumbers.length; index += 2) {
    if (arrayNumbers[index] % 2 === 0) {
        sum += arrayNumbers[index];
    }
}

console.log('7.Sum of Even Positioned Even Numbers:', sum);
var sum = 0;
for (let index = 1; index < arrayNumbers.length; index += 2) {
    if (arrayNumbers[index] % 2 === 0) {
        sum += arrayNumbers[index];
    }
}
console.log('8.Sum of odd Positioned Even Numbers:', sum);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index += 2) {
    if (arrayNumbers[index] % 2 === 0) {
        sum += arrayNumbers[index];
    }
}
console.log('9.Sum of Odd Positioned Even Numbers:', sum);

var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum += arrayNumbers[index];
}

console.log('10.Sum of All Elements:', sum);

console.log(`11.is number 23 available in array number`);
var numberToCheck = 23;
if (arrayNumbers.includes(numberToCheck)) {
    console.log(`${numberToCheck} is present in the array.`);
} else {
    console.log(`${numberToCheck} is not present in the array.`);
}
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var numbersToInsert = [55, 66];
var insertionIndex = 3;

// Insert numbers using the splice() method
Array.prototype.splice.apply(arrayNumbers, [insertionIndex, 0].concat(numbersToInsert));

// Log the updated array
console.log('12.Insert Number:', arrayNumbers);

var startIndex = 4;
var numberOfElementsToDelete = 3;

// Delete elements using the splice() method
arrayNumbers.splice(startIndex, numberOfElementsToDelete);

// Log the updated array
console.log('13. Delete 3 Element:', arrayNumbers);

