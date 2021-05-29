console.log(process.pid);
console.log(process.versions.node);

console.log(process.argv);      // shows us the path to argv to terminal

// e.g
/*
const [,, firstName, lastName] = process.argv;

//uncomment the line below
console.log(`Your name is ${firstName} ${lastName}.`);
// now type your name after the arguments to run the file in terminal
*/


// another use of process
const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`greeting to user : ${greeting} ${user}`);
// Type  'node filename --user "userName"  --greeting "message here"' in terminal

