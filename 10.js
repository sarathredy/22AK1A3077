const prompt = require("prompt-sync")({ sigint: true });
fs.writeFileSync('example.txt', data);
console.log('File created successfully.');
const fs = require('fs');

// Function to read 'n' characters from the start of the file and display them in reverse
function readAndReverse(n) {
    const data = fs.readFileSync('example.txt', 'utf8');
    const substring = data.substring(0, n);
    const reversed = substring.split('').reverse().join('');
    console.log(`Reversed substring: ${reversed}`);
}

// Example usage
const n = 50; // Number of characters to read
readAndReverse(n);
