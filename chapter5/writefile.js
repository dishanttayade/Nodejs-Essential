const fs = require("fs");

const md = `
# New File 
We can write new files with fs.writeFile

* fs.readir
* fs.readFile
*fs.writeFile
`;

fs.writeFile("./assets/notes.md", md.trim(), err =>{
    if(err){
        throw err;
    }
    console.log("file saved");
})