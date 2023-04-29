const http = require('http');

const server = http.createServer((req, res) => {
    // This message is just visible in this terminal and not in the browser's console when the client make a request. 
    // This is because it's just runing on the server side.
    console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('server listening on port 3000');
});