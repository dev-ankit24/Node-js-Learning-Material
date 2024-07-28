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

import Example ,{name,arr,emp ,fun} from "./userdefineModules/test2.mjs";
let obj= new Example()
obj.show()
console.log( name);
console.log( arr);
console.log( emp);
fun()