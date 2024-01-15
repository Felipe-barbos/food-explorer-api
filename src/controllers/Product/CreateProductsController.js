const ProductsRepository = require("../../repositories/Products/ProductsRepository");
const ProductsCreateService = require("../../services/Product/ProductsCreateService");

class ProductsController {
  async handle(request, response) {
    const { name, description, type, price } = request.body;

    const productsRepository = new ProductsRepository();
    const productsCreateService = new ProductsCreateService(productsRepository);


    const product_id = await productsCreateService.execute({ name, description,type, price });


    response.json({
      message: "Produto criado com sucesso!",
      id: product_id
    });
  }
}



module.exports = ProductsController;