const cp = require('child_process');

//cp.exec("open https://www.youtube.com/");   

cp.exec("ls", (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
});