//Function 1 - hello world
//Description: Make a simple function called greet that returns the most - famous "hello world!".
//https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript


function greet() {
    const word = 'hello world!'
    return word
}
// Write a function "greet" that returns "hello world!"

//Beginner Series #3 Sum of Numbers
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript


function getSum(a, b) {
    let total = 0
    if (a === b) {
        return a
    }

    if (a < b) {
        for (let i = a; i <= b; i++) {
            total += i
        }
    }

    if (b < a) {
        for (let i = b; i <= a; i++) {
            total += i
        }
        return total
    }
}

//Multiply
//This code does not execute properly. Try to figure out why.
//https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript


const multiply = (a, b) => a * b