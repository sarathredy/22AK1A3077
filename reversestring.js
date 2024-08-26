const prompt = require("prompt-sync")({ sigint: true });
function reverseEachWord(str) {
    return str.split(' ')
              .map(word => word.split('').reverse().join(''))
              .join(' ');
}

// Example usage:
let input = prompt("Enter a string:");
let output = reverseEachWord(input);
console.log("Input:", input);
console.log("Output:", output);

