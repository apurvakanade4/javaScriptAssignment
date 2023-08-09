var count = 12;
var fibArray = [0,1];

for (let index = 2; index < count; index++) {
    fibArray[index] = fibArray[index - 1] + fibArray[index -2];
    
    
}
console.log(" ==== Fibonacci Series ====");
console.log(" ");
console.log(` Fibonacci Series is ==> ${fibArray}...`);