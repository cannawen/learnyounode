const fs = require('fs')

const filePath = process.argv[2];
const fileString = fs.readFileSync(filePath).toString();
console.log(fileString.split('\n').length - 1);
