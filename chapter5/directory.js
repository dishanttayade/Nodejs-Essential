const fs = require("fs");

if(fs.existsSync("storage-files")){
    console.log("Already exist");
} else{
    
    fs.mkdir("storage-files", err =>{
        if(err){
            console.log("err");   
        }
        console.log("Directory created..")
    });

}
