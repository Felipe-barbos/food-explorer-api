

class ProductsRepositoryInMemory {
  products = [];


  async createProduct({ name, description, price }) {

    const product = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      description,
      price
    };

    this.products.push(product);


    return product;
  }
}


module.exports = ProductsRepositoryInMemory;