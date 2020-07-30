const csvReader = require('csvtojson');
const fs = require('fs');
const {pipeline} = require('stream');

const fileLocation = __dirname + '\\resourses\\nodejs-hw1-ex1.csv';


// const readStream = fs.createReadStream(fileLocation);
// const writeStream = fs.createWriteStream('output.txt');

// readStream.pipe(csvReader.csv()).pipe(writeStream);

fs.mkdir('output', { recursive: true }, (err) => {
    if (err) throw err;
});

pipeline(
    fs.createReadStream(fileLocation),
    csvReader.csv(),
    fs.createWriteStream('output\\output.txt'),
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);

