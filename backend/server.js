import  express from 'express'
import productRouter from './src/product/controllers/product.routes.js';
import  bodyParser from 'body-parser';
const server= express();
server.use(express.json());


server.get("/",(req,res)=>{
    res.send("your server is running   successfully on port 3200")
})


// for all requests related to products redirect to product routes

server.use("/api/products",productRouter)

server.listen(3800)
console.log("server is running on port 3200")





