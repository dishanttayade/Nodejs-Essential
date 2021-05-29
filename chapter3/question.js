// process.stdout.write("Hello ");
// process.stdout.write("World \n\n");


const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "Which is your preferred genre for movies?"
]

const answers = []

const ask = (i=0) => {
    process.stdout.write(`\n\n ${questions[i]}   > `);
    
}

ask();

process.stdin.on("data", data =>{
    /*
    process.stdout.write(`\n ${data.toString().trim()}\n`);
    process.exit()
    */
   answers.push(data.toString().trim());
    
   if(answers.length < questions.length){
       ask(answers.length);
   }    else{
       process.exit();
   }
});

process.on("exit", () => {
    console.log(`
        Thank you for the answers.
        Go watch ${answers[1]}! 
    `)
})