console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let num = 1
for (num = 1; num <= 100; num++)
    if (num % 2 == 1){
        console.log(num)
    }
    else if (num % 2 == 0) {
        continue
    }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
num=1
for (num = 1; num<= 100; num ++)
    if (num % 3 == 0 && num % 5 == 0){
        console.log(num + "FIZZBUZZ")
    }
    else if (num % 3 == 0) {
        console.log(num + "FIZZ")
    }
    else if (num % 5 == 0) {
        console.log(num + "BUZZ")
    }
    else if (num % 5 == 1 || num % 3 == 1){
        continue
    }

//Exercise 3 Do/While
console.log("EXERCISE 3:\n==========\n")
num = 1
let doWhileS = start;
do {
    let output = ""; 
    if (doWhileS % 3 == 0){
        output += "FIZZ";
    }

    if (doWhileS % 5 == 0) {
        output += "BUZZ";
    }
    output && console.log(doWhileS, output);

    doWhileS++;
} while(doWhileS <= end);

//Exercise 3 While
let whileS = start;
while (whileS <= end) {
    let output = "";

    if(whileS % 3 == 0) {
        output += "FIZZ";
    }
    if (whileS % 5 == 0) {
        output += "BUZZ";
    }
    output && console.log(whileS, output); 
    whileS++;
}
//Exercise 4
console.log("EXERCISE 4:\n==========\n")
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let num = 0; num <= n; num++) {
    if (num == value){
        console.log ("Found Value");
        break;
    } else {
        console.log ("Didn't find value");
    }
}

//Exercise 5
console.log("EXERCISE 5:\n==========\n")

let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
n = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

for (let i = start; start <=n; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log ("FIZZBUZZ");
    } else if (i % fizzDivisor == 0) {
        console.log ("FIZZ");
    } else if (i % buzzDivisor == 0) {
        console.log ("BUZZ");
    }
}