//Core Modules

//fs (file system) module
var fs = require('fs');
fs.writeFileSync('testFile.txt', "This is how you create a file with some content");
console.log(fs.readFileSync('testFile.txt').toString());

//path module
var path = require('path');
var krsHome = "Desktop//project/krs/index.html";
var krsAbout = "Desktop/project/krs/about.html";
console.log(path.normalize(krsHome));
console.log(path.normalize(krsAbout));
console.log(path.dirname(krsAbout));
console.log(path.basename(krsAbout));
console.log(path.extname(krsAbout));
