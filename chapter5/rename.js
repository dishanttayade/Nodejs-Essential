const fs = require('fs');

fs.renameSync("./assets/colors.json", "./assets/colorsData.json");

fs.rename("./assets/notes.md", "./storage-files/notes.md", err =>{
    if(err){
        throw err; 
    }
});

setTimeout(() => {

    fs.unlinkSync("./assets/a.html");

},4000)