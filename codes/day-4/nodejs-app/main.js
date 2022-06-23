const fsModule = require('fs')
const httpModule = require('http')

var data = fsModule.readFileSync('./data.txt');
var server = httpModule.createServer((req, res) => {

    res.end(data.toString())
    // res.setHeader('ContentType', 'application/html');
    // res.end(`<html><head><title>Index</title></head><body><p>${data.toString()}</p></body></html>`);
})
server.listen(3000, () => console.log('server running'));
// function add(first, second) {
//     return (first + second);
// }

// var addResult = add(10, 20);
// console.log(addResult)

// var data = fsModule.readFileSync('./data.txt');
// console.log(data.toString());