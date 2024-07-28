// using CJS  

// const name=require("./userdefineModules/test1")
// console.log(name)

// import from using Array with destacture
const [name,arr,emp,fun ,Example]=require("./userdefineModules/test1")
console.log("Name:",name);
console.log("Array:",arr);
console.log("employee:",emp);
fun()
var obj=new Example
obj.show()
