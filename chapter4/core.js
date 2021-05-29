const path = require("path");
/*
const dirUploads = path.join(__dirname, 'www', 'file', 'uploads');

console.log(dirUploads);
*/

const util = require("util");

/*
util.log(path.basename(__filename));
util.log(" ^ is the name of file");
// we also get the date and time
*/

const v8 = require("v8");

util.log(v8.getHeapStatistics());
// tells memory information
// can be called as
//  const { getHeapStatistics } = require("v8");