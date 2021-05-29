const fs = require('fs');
/*
const files = fs.readdirSync("./assets");
console.log(files);
*/
fs.readdir("./assets", (err, files) => {
    if(err) {
        throw err;
    }
    console.log(files);
});

console.log("reading files...");
