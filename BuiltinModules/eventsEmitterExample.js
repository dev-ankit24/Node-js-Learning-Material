//  Events Module

// const event=require("events")
// const eventEmitter= new event.EventEmitter()
// creating and Lisling events
// eventEmitter.on("test",()=>console.log("Helllo world"))
// eventEmitter.on("test",()=>console.log("Helllo world"))
// eventEmitter.on("test",()=>console.log("Helllo world"))
// eventEmitter.on("test",()=>console.log("Helllo world"))
// eventEmitter.on("test",()=>console.log("Helllo world"))

// // fireing ya function calling 
// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")


// Single data sharing 
//  eventEmitter.on("user",(name)=>console.log("user name is :",name))
//  eventEmitter.emit("user","Ankit Kumar")


//  send Json data in events
//   const event=require("events")
//   const eventEmitter= new event.EventEmitter()
//   eventEmitter.on("test",(data)=>console.log(data))
//   eventEmitter.emit("test", [
//                {id:102,name:"ankit kumar", mob:"8392823395"},
//                {id:103,name:"paramnand", mob:"9845852552"},
//                {id:104,name:"Devesh verma", mob:"9544578147"},
//                {id:105,name:"alok kumar", mob:"7825105842"},
//                {id:102,name:"manish", mob:"83978247022"},
//            ])



//  send Jsonfile in events

const event=require("events")
let fs= require("fs")
const eventEmitter= new event.EventEmitter()

eventEmitter.on("test",(data)=>{
    console.log(data)
})
let data= fs.readFileSync("data.json","utf-8")
eventEmitter.emit("test",JSON.parse(data))

