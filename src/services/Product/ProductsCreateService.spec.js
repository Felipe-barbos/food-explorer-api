const UserRepositoryInMemory = require("../../repositories/Users/UserRepositoryInMemory");
const ProductsRepositoryInMemory = require("../../repositories/Products/ProductsRepositoryInMemory");
const UsersCreateService = require("../../services/Users/UsersCreateService");
const ProductsCreateService = require("../../services/CreateProduct/ProductsCreateService");
const { except } = require("../../database/knex");

describe("SessionsCreateService", () => {

  let productsRepositoryInMemory = null;
  let productsCreateService = null;


  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    productsCreateService = new ProductsCreateService(productsRepositoryInMemory);
  });

  it("Should be create a product", async () => {
    const product = {
      name: "Sala de frutas",
      description: "Uma salada incrível",
      price: 18.99
    }

    const productCreated = await productsCreateService.execute(product);


    console.log(productCreated);

    expect(productCreated).toHaveProperty("id");

  });

});