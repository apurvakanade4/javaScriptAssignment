console.log("01.Print the no. from 5 to 15 by incrementing 1");
//wap to print numbers from 5 to 15 
let i=5; // initialization i = 5 6 7
while (i<=15) { // condition 5<=15
    console.log(i); // 5 6 7
    i = i + 1;
}

console.log("02.Print the no. from 50 to 40 by decrementing by 1");
// wap to print numbers from 50 to 40 
let k = 50; 
while (k>=40) {
   console.log(k);
   k--;
}

console.log("03.First the first 15 odd no.");
let num1 = 1;
count = 0;
while(count<15){
    if (num1%2!=0) {
        console.log(num1);
        count = count + 1;   
    }
num1 = num1 +1;
}
console.log("04.Find the first 10 even no.");
let num = 1;
count = 0;
while(count<10){
    if (num1%2==0) {
        console.log(num1);
        count = count + 1;   
    }
num1 = num1 +1;
}

console.log("05.wap to print table of 5");
let num2 = 5; // initialization
count1 = 0;
while(count1<10){
    if (num2%5==0) {
        console.log(num2);
        count1 = count1  + 1;
    }
    num2 = num2 +5;
}
console.log("06.Find to print table of 10");
let num3 = 10; // initialization
count2 = 0;
while(count2<10){
    if (num3%10==0) {
        console.log(num3);
        count2 = count2  + 1;
    }
    num3 = num3 +1;
}
console.log("07.Find to print table of 10 in reverse order");
let num4 = 100; // decremention
count3 = 0;
while(count3<10){
    if (num4%10==0) {
        console.log(num4);
        count3 = count3  + 1;
    }
    num4 = num4 - 10;
}
















