var fs = require('fs');
var file = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(file-1);

