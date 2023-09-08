const array = [20,11,40,25,23,11,9,31,60,2,9];
console.log("1. add 10 into each element and log new array result on console");
const arrayTen = array.map((currentValue) => {
    return currentValue + 10;
});
console.log(arrayTen);

console.log("2. Cube the each array element");
const arrayOfCube = array.map((currentValue) => {
    return currentValue * currentValue * currentValue;
});
console.log(arrayOfCube);

console.log("3. add index value  into its correspoding each array element");
const index = [1,2,3,4,5,6,7,8,9,10];
const array1 = [20,11,40,25,23,11,9,31,60,2,9];
const newArray = array1.map((array1,index) => {
    return array1 + index;
});
console.log(newArray);





