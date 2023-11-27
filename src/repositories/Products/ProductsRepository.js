const knex = require("../../database/knex");

class ProductsRepository {

  async createProduct({ name, description, price }) {

    const [product_id] = await knex("products").insert({
      name,
      description,
      price
    });


    return { id: product_id };
  }
}


module.exports = ProductsRepository;