const fs = require('fs');
const path = require('path')

// Splitting string with "," and picking the right data
var arr = fs.readFileSync('path to file', 'utf-8').toString().split('\n').map(str => str.split(',')[1])

// Create string with line breaks using an array
const _arr = arr.join('\n')

try {
    fs.writeFileSync(__dirname+'/4.txt', _arr)
} catch(err) {
    console.log(err)
}

exports.test = () => {
    console.log("test")
}