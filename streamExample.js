const http= require("http")
const fs= require("fs")

const server= http.createServer((req,res)=>{
    if(req.url=="/")
        res.end("<h4>This Is Home Page </h4>")
    else if(req.url=="/data"){
        let stream= fs.createReadStream("./data2.json", "utf-8")
        stream.on("data",(chunk)=>{
            res.end(chunk)
        })
        stream.on("end",(chunk)=>{
            res.end("No More Data")
        })
        stream.on("error",(error)=>{
            console.log(error);
            res.writeHead(500)
            res.end("Internal Server error ")
        })
    }
    else{
        res.writeHead(404)
        res.end("404 Page Not found ")
    }
})
 server.listen(5857,console.log("server Is Running Port http://localhost:5857"))