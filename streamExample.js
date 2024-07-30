// very large data using Readable streams
// const http= require("http")
// const fs= require("fs")

// const server= http.createServer((req,res)=>{
//     if(req.url=="/")
//         res.end("<h4>This Is Home Page </h4>")
//     else if(req.url=="/data"){
//         let stream= fs.createReadStream("./data2.json", "utf-8")
        // event manual use
//         stream.on("data",(chunk)=>{
//             res.write(chunk)
//         })
//         stream.on("end",()=>{
//             res.end("No More Data")
//         })
//         stream.on("error",(error)=>{
//             console.log(error);
//             res.writeHead(500)
//             res.end("Internal Server error ")
//         })
//     }
//     else{
//         res.writeHead(404)
//         res.end("404 Page Not found ")
//     }
// })
//  server.listen(5857,console.log("server Is Running Port http://localhost:5857"))



//  PIPE Line Streams (same as Readable Strems )
const http= require("http")
const fs= require("fs")
const { log } = require("console")

let server = http.createServer((req,res)=>{
    if(req.url=="/")
        res.end("<h4>This is Home page </h4>")
    else if (req.url=="/data"){
        let stream= fs.createReadStream("./data2.json", "utf-8")
        stream.pipe(res)
    }
    else{
        res.writeHead(404)
        res.end("404 page is not found ")
    }
})
 server.listen(8000,console.log("server is runing: http://localhost:8000"))