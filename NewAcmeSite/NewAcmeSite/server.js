var http = require('http');
var site = require('site');
var index = site.readFileSync('homePage.html');

http.createServer(function (req, res) {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.write(html);
     res.end(index);
}).listen(1337);




