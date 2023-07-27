const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    // Handle different HTTP methods (optional)
    if (req.method === 'GET') {
        // Send an HTML file
        fs.readFile('./views/index.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500; // Internal Server Error
                res.end('Error loading the page.');
            } else {
               res.write(data);
                res.end();
            }
        });
    } else {
        // Handle other HTTP methods if needed
        res.statusCode = 405; // Method Not Allowed
        res.end('Method not allowed.');
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

