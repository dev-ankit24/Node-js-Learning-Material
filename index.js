// using CJS  

// const name=require("./userdefineModules/test1")
// console.log(name)

// import from using Array with destacture
// const [name,arr,emp,fun ,Example]=require("./userdefineModules/test1")
// console.log("Name:",name);
// console.log("Array:",arr);
// console.log("employee:",emp);
// fun()
// var obj=new Example
// obj.show()

// const {name,emp,arr,fun,Example}=require("./userdefineModules/test1")
// console.log("name ",name)
// console.log("array ",arr)
// console.log("employee ",emp)                         // Object Formate Import
// fun()
// let obj=new Example
// obj.show()

// ------------------------------MJS Module----------------------------------------------------------------------
//  import name from "./userdefineModules/test2.mjs"
//  console.log(name);

// import Example ,{name,arr,emp ,fun} from "./userdefineModules/test2.mjs";
// let obj= new Example()
// obj.show()
// console.log( name);
// console.log( arr);
// console.log( emp);
// fun()


// ******************************** CORE (BUILTIN ) MODULES ****************************************
// require("./BuiltinModules/fsModuleSync")
// require("./BuiltinModules/fsModuleAsync ")
// require("./BuiltinModules/osModule");
// require("./BuiltinModules/pathModule");

// ************************************ ThirdParty modules***********************************************

// var passwordValidator = require('password-validator');
// var schema = new passwordValidator();

// schema
// .is().min(5)                                    // Minimum length 8
// .is().max(100)                                  // Maximum length 100
// .has().uppercase(1)                              // Must have uppercase letters
// .has().lowercase(1)                              // Must have lowercase letters
// .has().digits(1)                                // Must have at least 2 digits
// .has().not().spaces()                           // Should not have spaces
// .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

// console.log(schema.validate("ankit123"));                 // false      
// console.log(schema.validate("ANKIT123"));                 // false
// console.log(schema.validate("ankit123"));                 // false
// console.log(schema.validate("Password123"));              // false
// console.log(schema.validate("Ankit@123"));                //true


// server using http  core module
// const http= require ("http")

// let server= http.createServer((req, res)=>{
//     res.write("Hello world 1")
//     res.write("Hello world 2")
//     res.write("Hello world 3")
//     res.write("Hello world 4")
//     res.end("Hello from Server ")
// })
// server.listen(8001,console.log("server is running http://localhost:8001"))


// Routing in Node js
// const http= require("http")

// const server= http.createServer((req,res)=>{
//     if(req.url=="/")
//         res.end('<h1>Home Page</h1>')
//     else if (req.url=="/about")
//         res.end("<h1>About Page</h1>")
//     else if(req.url=="/contact")
//         res.end("<h1>Contact  Page</h1>")
//     else{
//         res.writeHead(404)
//         res.end("<h1>404!  Page Not Found</h1>")
//     }
// })
// server.listen(8000,console.log("Server is Runing http:\\localhost:8000"))


// serving JSON data from server
// const http= require ("http")

// let server=http.createServer((req,res)=>{
//     if(req.url=="/")
//         res.end("<h4>Home page</h4>")
//     else if (req.url=="/data"){
//         let data=[
//             {id:102,name:"ankit kumar", mob:"8392823395"},
//             {id:103,name:"paramnand", mob:"9845852552"},
//             {id:104,name:"Devesh verma", mob:"9544578147"},
//             {id:105,name:"alok kumar", mob:"7825105842"},
//             {id:102,name:"manish", mob:"83978247022"},
//         ]
//         res.end(JSON.stringify(data))
//     }
//     else{
//         res.writeHead(404)
//         res.end("<h4> 404! Page Not Found  </h4>")
//     }
// })

// server.listen(8000, console.log("http://localhost:8000"));


// serving JSON file data from server
// const http= require ("http")
// const fs= require ("fs")

// const server = http.createServer((req,res)=>{
//     if(req.url=="/")
//         res.end("<h4>Home Page</h4>")
//     else if(req.url=="/data"){
//         let data=fs.readFileSync("data.json", "utf-8")
//         res.end(data)
//     }
//     else{
//         res.writeHead(404)
//         res.end("<h4>404 Not Page found</h4>")
//     }
// })
// server.listen(8000, console.log("server is Running http://localhost:8000"))




// Using  Events Module
require("./BuiltinModules/eventsEmitterExample")



