const knex = require("../../database/knex");

class UpdateProductService {

  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({ price, product_id }) {

    const productUpdated = await knex("products")
      .where({ id: product_id })
      .update({
        price: price,
        updated_at: new Date()
      });




    return productUpdated;
  }
}


module.exports = UpdateProductService;