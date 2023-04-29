const fs = require('fs');

// Read files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('this runs first');

//Write files
//this function overwrites the existing file.
fs.writeFile('./docs/blog1.txt', 'Hello Iggy', () => {
    //console.log('file was written');
});

//this creates a new file
fs.writeFile('./docs/blog2.txt', 'Hello Vince', () => {
    console.log('file was written');
});

// Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// Delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file was deleted');
    });
}