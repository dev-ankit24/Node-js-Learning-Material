const path= require("path")

let a= "E:\Node\test"
// return file with extension
console.log("file name:", path.basename(a));

//return directry name
console.log("directry name", path.dirname(a));

// return file extension name
console.log("File Extension:",path.extname(a));

// resolve path (old path change new Path)
//  console.log(path.resolve("D:\\Nitin\\sample.txt", "D:\\Nitin\\sample9.txt"));

console.log(path.isAbsolute("D:\\Nitin\\sample.txt"));
console.log(path.isAbsolute("www.google.com"));
console.log(path.isAbsolute("index.html"));
