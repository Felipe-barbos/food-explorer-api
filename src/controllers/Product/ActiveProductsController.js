const ProductsRepository = require("../../repositories/Products/ProductsRepository");
const ActiveProductsService = require("../../services/Product/ActiveProductsService");


class ActiveProductsController {


  async handle(request, response) {
    const { id: product_id } = request.params;

    const productsRepository = new ProductsRepository();

    const activeProductsService = new ActiveProductsService(productsRepository);

    const product = await activeProductsService.execute(product_id);



    response.json({
      message: "Produto disponível no catálogo",
      product
    });

  }
}


module.exports = ActiveProductsController;