const fs = require('fs');

// Reading a stream
// const readStream = fs.createReadStream('./docs/blog1.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     console.log(chunk.toString());
// });

// Adding { encoding: 'utf8' } do the same as chunk.toString().
// const readStream = fs.createReadStream('./docs/blog1.txt', { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
// });

// Writing a stream
const readStream = fs.createReadStream('./docs/blog1.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog2.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// This function do the same as the above one. It writes de blog1.txt content to the blog2.txt file.
readStream.pipe(writeStream)