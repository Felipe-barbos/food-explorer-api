const knex = require("../../database/knex");
const AppError = require("../../utils/AppError");

class ProductsRepository {

  async createProduct({ name, description,type, price }) {

    const [product_id] = await knex("products").insert({
      name,
      description,
      type,
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

  async showProduct(product_id) {
    const product = await knex("products")
      .where({ id: product_id }).first();


    return product;

  }

  async getProducts() {
    const dishes = await knex("products").where({ isActive: true }).andWhere({type: "dish"});

    const drinks = await knex("products").where({isActive:true}).andWhere({type:"drink"});

    

  


    return {
      dishes,
      drinks
    };
  }


  async updatedAvatar({ product_id, filename }) {
    const product = await knex("products")
      .where({ id: product_id }).first();

    console.log(filename);

    product.avatar = filename;

    const productAltered = await knex("products").update(product).where({ id: product_id });

    return productAltered;


  }
}


module.exports = ProductsRepository;