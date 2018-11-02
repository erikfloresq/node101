const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const str = buffer.toString().split('\n').length - 1;

console.log(str);