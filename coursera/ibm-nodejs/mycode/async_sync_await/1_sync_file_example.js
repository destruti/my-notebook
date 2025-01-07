let fs = require('fs');

let filename1 = "../data/simple.json";
let filename2 = "../data/course.json";

function readFile1(filename1) {
    let data = fs.readFileSync(filename1);
    console.log("Completed reading file1");
}

function readFile2(filename2) {
    let data = fs.readFileSync(filename2);
    console.log("Completed reading file2");
}

console.log('Before reading file-1');
readFile1(filename1);

console.log('Before reading file-2');
readFile2(filename2);

console.log('All done!');
