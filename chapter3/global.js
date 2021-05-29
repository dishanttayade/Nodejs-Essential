//will give you the path 
console.log(__dirname);     // of the directory
console.log(__filename);    // of the file 


const path = require("path");


console.log(`The file name is ${path.basename(__filename)}`);