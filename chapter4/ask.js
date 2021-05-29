const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Do you like node? ", answer => {
    console.log(`Your answer : ${answer}`);
});