// import http from "http"
// import name,{a} from "./myserver2.js"

// console.log(name,a)
const http = require("http");
const express =require("express");
const app = express();
var {a} = require("./myserver3");
console.log(a);
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });


// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`); 
// }); 

app.get("/:id:name",(req,res)=>{
    console.log(req);
    res.send("Home called");
})

app.listen(8080,()=>{
    console.log("Web server started on 8080");
})