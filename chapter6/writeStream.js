const fs = require('fs');

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorem-ipsum.md", "UTF-8");

readStream.pipe(writeStream);


/*
readStream.on("data", data => {
    writeStream.write(data);
});
/
/*

writeStream.write("hello\n");

writeStream.write("World\n");   



process.stdin.on("data", data() =>{
    writeStream.write(data);
});

*/