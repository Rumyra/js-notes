var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200);
  response.write('<h1>Wha!!!</h1>\n');
  response.end();
  console.log(request.url);
}).listen(3456);
console.log('Server running at http://localhost:3456');
