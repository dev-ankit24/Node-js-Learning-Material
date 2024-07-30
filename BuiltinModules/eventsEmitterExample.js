//  Events Module

const event=require("events")
const eventEmitter= new event.EventEmitter()
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


//Single data sharing 
 eventEmitter.on("user",(name)=>)