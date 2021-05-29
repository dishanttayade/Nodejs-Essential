const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Name\n");
questionApp.stdin.write("Something\n");
questionApp.stdin.write("Nothing\n");


questionApp.stdout.on("data", data => {
    console.log(`from the questions app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});