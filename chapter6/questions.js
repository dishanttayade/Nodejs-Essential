
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do? "
];

const collectAnswers = (questions, done) =>{
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        }
        else{
            done(answers);
        }
    };

    rl.question(firstQuestion, questionAnswered);
    // done(answers)
};

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});


/*
const collectAnswers = require("../chapter4/lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do? "
];


collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});
*/