class Product {
    constructor(id, title, description, price, thumbnail, code, stock){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }

    getProduct () {return this;}

    getId() {return this.id;}

    getCode() {return this.code;}
}

class ProductManager {
    static id;
    constructor () {
        this.products = [];
        ProductManager.id = 0;
    }

    addProduct (title = "", description = "", price  = "", thumbnail = "", code = "", stock = ""){
        
        if (title != "" && description != "" && price != "" && thumbnail != "" && code != "" && stock != "") {
            let producto = this.products.find(p => p.getCode() === code);
            if (producto === undefined){
                this.products.push( new Product(ProductManager.id ++, title, description, price, thumbnail, code, stock));
            /* this.products.push(
                    {
                        id : ProductManager.id ++,
                        title : title,
                        description : description,
                        price : price,
                        thumbnail : thumbnail,
                        code : code,
                        stock : stock
                    }
                ) */      
            }
        }
    }
    
    getProducts () {return this.products;}

    
    findById (id) {
        let producto = this.products.find(p => p.getId() === id);
        if (producto != undefined){
            return producto
        }
        else{
           console.error ("Not found");
        }
    }
}


//Main

let productos = new ProductManager();
productos.addProduct("alfajor", "chocolate y dulce", 200, "alfajor.jpg", 123, 10);
productos.addProduct("caramelo", "menta", 10, "caramelo.jpg", 123, 20);
productos.addProduct("caramelo", "menta", 10, "caramelo.jpg", 345, 20);

productos.addProduct();
productos.addProduct("", "menta", 10, "caramelo.jpg", 1, 20);

console.log (`getProducts:`);
console.log(productos.getProducts());
console.log (`findById 0: `);
console.log (productos.findById(0));
console.log (`findById 3: ${productos.findById(3)}`);
