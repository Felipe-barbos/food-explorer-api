

class ProductsRepositoryInMemory{
 products = [];


 async createProduct({name, description, plice}){

  const product = {
   id: Math.floor(Math.random() * 1000) + 1,
   name,
   description,
   plice
  };

  this.products.push(product);


  return product;
 }
}


module.exports = ProductsRepositoryInMemory;