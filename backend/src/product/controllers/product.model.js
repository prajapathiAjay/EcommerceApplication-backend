export default class ProductModel {
    constructor(id, name, desc, imageUrl, category, prices, sizes) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.prices = prices; // Array of prices for different sizes
        this.sizes = sizes; // Array of available sizes
    }
    static addProduct(product) {
        products.push(product);
        console.log("Product added successfully:", product);
        return product;
    }

static getOneProduct(id) {
        const product = products.find(p => p.id === parseInt(id));
        if (!product) {
            console.log("Product not found with id:", id);
            return null;
        }
        console.log("Product found:", product);
        return product;
    }



}

var products = [new ProductModel(1, "T-shirt", "A comfortable cotton t-shirt", "https://example.com/tshirt.jpg", "clothing", [19.99, 21.99], ["S", "M", "L"]) ,
new ProductModel(2, "Jeans", "Stylish denim jeans", "https://example.com/jeans.jpg", "clothing", [39.99, 41.99], ["30", "32", "34"]),
    new ProductModel(3, "Sneakers", "Trendy sneakers for everyday wear", "https://example.com/sneakers.jpg", "footwear", [59.99, 64.99], ["8", "9", "10"]),
    new ProductModel(4, "Watch", "Elegant wristwatch with leather strap", "https://example.com/watch.jpg", "accessories", [99.99, 109.99], ["One Size"]),
    new ProductModel(5, "Backpack", "Durable backpack for travel and daily use", "https://example.com/backpack.jpg", "accessories", [49.99, 54.99], ["One Size"]),

]


console.log("ProductModel initialized with products:", products);