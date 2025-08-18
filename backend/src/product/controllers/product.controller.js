import ProductModel from "./product.model.js";


export default class ProductController {
 getAllProducts(req, res) {
    const allproducts= ProductModel.getAllProducts();
    res.send(allproducts);
  }

 addProduct(req,res){
   const {  name, price, sizes } = req.body;

   const newProduct = {name,price:price,sizes:sizes,imageUrl:req.file.filename};
   let addedProduct=ProductModel.addProduct(newProduct);
  //  res.status(201).send(addedProduct);
  res.json({ message: "Product added successfully", product:newProduct });
 }
  
rateProduct(req,res){
    res.send("Product rated successfully");
}
getOneProduct(req,res){
   const productId = req.params.id;
   const product = ProductModel.getOneProduct(productId);
   res.json(product ? product : { message: "Product not found" });
}


}

