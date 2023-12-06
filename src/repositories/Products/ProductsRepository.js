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


  async activeProduct({ product_id, isActive }) {
    const product = await knex("products").where({ id: product_id })
      .update({
        isActive: isActive,
      });


    return product;
  }
}


module.exports = ProductsRepository;