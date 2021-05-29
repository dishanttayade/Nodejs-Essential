const fs = require("fs");

/*
const text = fs.readFileSync("./assets/README.md", "UTF-8");

console.log(text);
*/

fs.readFile("./assets/README.md", "UTF-8", (err, text) =>{
   if(err){
       console.log(`An error has occured : ${err.message}`);
       process.exit();
   }
    console.log(text);
});