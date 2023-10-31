// function sum(a, b) {
//     return a + b;
// }

// result = sum(1, 2);

// console.log(result);

// --------------

const http = require('http');
 
// console.log(http, "http");

const hostname = '127.0.0.1';
const port = 3000;

const getMovies = () => {
    return ['a', 'b', 'c'];
}

const getProducts = () => {
    return ['h', 'o', 'p'];
}

/*
Informational responses (0-199)
Successful responses (200-299)

*/
 
const server = http.createServer((req, res) => {
    console.log(req.url, "req");

    if (req.url.slice(1) === 'movies') {
        const movies = getMovies();

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});