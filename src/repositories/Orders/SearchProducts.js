const knex = require("../../database/knex");


async function searchProducts(product_id) {

  product = await knex("products").where({ id: product_id }).first();

  const { id, created_at, updated_at, ...rest } = product;


  return rest;
}


module.exports = searchProducts;