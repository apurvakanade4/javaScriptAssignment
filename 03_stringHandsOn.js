


var sentenceWithSpaces = "  Hey you doing good, keep it up  ";
var lenghtOfSentenceWithSpaces = sentenceWithSpaces.length;
var SentenceWithoutSpaces = sentenceWithSpaces.trim();
var lenghtAfterTrim = SentenceWithoutSpaces.length;
console.log("1.Given string is:", sentenceWithSpaces);
console.log("2.Lenght of the string is:", lenghtOfSentenceWithSpaces);
console.log("3.After Trim, lenght of the string is:", lenghtAfterTrim);
console.log("4.Total number of Extra spaces removed:", lenghtOfSentenceWithSpaces-lenghtAfterTrim);

var charAtZeroIndex = SentenceWithoutSpaces.charAt(0);
var charAtLastIndex = SentenceWithoutSpaces.charAt(lenghtAfterTrim-1);
var charat3 = SentenceWithoutSpaces.charAt(3)
var concatZeroIndexAndLastIndex = charAtZeroIndex.concat(charat3,charAtLastIndex)
console.log("5.Character at First & Last Index is: ",concatZeroIndexAndLastIndex);

var countOfWord = SentenceWithoutSpaces.split(" ");
console.log("6.Total Available word in string:",countOfWord.length);

var indexofwordGood = SentenceWithoutSpaces.indexOf("good");
console.log("7.Index of word Good:",indexofwordGood);

var staringIndex22 = sentenceWithSpaces.substring("22");
console.log("8.subString of starting index 22:",staringIndex22);

var staringIndex22 = sentenceWithSpaces.slice("22");
console.log("8.slice of string index 22:",staringIndex22);

var stringEnd = SentenceWithoutSpaces.endsWith("up");
console.log("9.Ends with up:",stringEnd);

var stringStart = SentenceWithoutSpaces.startsWith("Hey");
console.log("10.Start with Hey:",stringStart);