// CJS using
// var name= "ankit kumar"
// module.exports=name

// multiple varible
 var name= "ankit kumar"
 module.exports=name
 var arr=[10,20,50,80,7]
 var emp={
    id:1001,
    name:"Nitin Chauhan",
    dsg:"Trainer",
    salary:182000
 }
function fun(){
    console.log("IN Function fun() ");
}
class Example{
    show(){
        console.log("in Show() Example Class");
    }
}
module.exports=[
    name,arr,emp,fun, Example
]