const prompt = require("prompt-sync")({ sigint: true });
function isArmstrongNumber(number) {
    // Convert the number to a string to easily iterate through its digits
    const numStr = number.toString();
    const numDigits = numStr.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(numStr[i]), numDigits);
    }

    // Check if the sum is equal to the original number
    return sum === number;
}

// Take user input
const userInput = prompt("Enter a number:");
const number = parseInt(userInput);

if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    if (isArmstrongNumber(number)) {
        console.log(number + " is an Armstrong number.");
    } else {
        console.log(number + " is not an Armstrong number.");
    }
}