var dt = require('./Calc');
console.log(dt.calc(10,20,'+'));

const http= require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res) => {
				res.statusCode = 200;
				res.setHeader('Content-Type','text/html');
				console.log(req.url);
                res.end("Your request has been submitted successfully. Please wait...");
            });
server.listen(port,hostname,() => {
console.log(`Server is running at http://${hostname}:${port}/`);
});