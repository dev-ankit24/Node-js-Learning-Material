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
const http= require("http")

let server= http.createServer((req, res)=>{
    res.end("Hello from Server ")
})
server.listen(8000,console.log("server is running http://localhost:8000"))