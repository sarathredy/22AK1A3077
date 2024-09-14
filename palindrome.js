function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

function nextPrimePalindrome(num) {
    do {
        num++;
    } while (!isPalindrome(num) || !isPrime(num));
    return num;
}

let num = parseInt(prompt("Enter an integer:"));

if (isPrime(num)) {
    console.log("Next prime palindrome:", nextPrimePalindrome(num));
} else {
    console.log("Not prime");
}
const prompt = require("prompt-sync")({ sigint: true });

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

function nextPrimePalindrome(num) {
    do {
        num++;
    } while (!isPalindrome(num) || !isPrime(num));
    return num;
}

let num = parseInt(prompt("Enter an integer:"));

if (isPrime(num)) {
    console.log("Next prime palindrome:", nextPrimePalindrome(num));
} else {
    console.log("Not prime");
}
