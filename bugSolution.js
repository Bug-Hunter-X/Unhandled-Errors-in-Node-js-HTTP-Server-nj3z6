const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle potential errors
server.on('error', (err) => {
  console.error('Server Error:', err);
  // Add appropriate error handling logic here,
e.g., retrying the operation, logging to a file, or notifying a monitoring system
});

server.listen(8080);
console.log('Server is running on port 8080');