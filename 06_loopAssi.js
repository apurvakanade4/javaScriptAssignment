console.log(`------- 1.Total number of vowels ---------`);
function vowelsCount(str) {
    let count = 0
    var index = 0
    while (index < str.length) {
        let char = str.charAt(index)
        index = index + 1
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char);
            count = count + 1
        }
    }
    console.log(`Total number of vowels is : ${count}`);
}
vowelsCount("I am very good IT Developer")
console.log(`------2. Sum of cube of numbers from 1 to 5 -------`);
function sumOfCube() {
    let totalSum = 0
    for (let index = 1; index <=5; index++) {
        totalSum = totalSum + index*index*index   
    }
    console.log(`Sum of cube of number from 1 to 5 is : ${totalSum}`);
}
sumOfCube()
console.log(`-----3. oddPositionedChars -----`);
function oddPositionedChars(string) {
    let result = ""
    for (let index = 0; index < string.length; index++) {
        const char = string.charAt(index);

        if (index % 2 != 0 && char != " ") {
            result = result.concat(char)
        }
    }
    console.log(`${result}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");
console.log(`-----Assignment B -----`);
function reverseString(str) {
    let reverse = "";
    for (let index = str.length-1; index >= 0; index--) {
        const char = str.charAt(index);
        if (index != ' ') {
            reverse = reverse.concat(char);
        }
    }
    console.log(`${reverse}`);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");