import  express from 'express'

const server= express();

server.get("/",(req,res)=>{
    res.send("your server is running   successfully on port 3200")
})

server.listen(3200)
console.log("server is running on port 3200")