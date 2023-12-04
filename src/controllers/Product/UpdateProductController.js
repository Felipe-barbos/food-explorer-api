const { update } = require("../../database/knex");
const ProductsRepository = require("../../repositories/Products/ProductsRepository");
const UpdateProductService = require("../../services/Product/UpdateProductService");



class UpdateProductController {


  async handle(request, response) {
    const { price } = request.body;
    const { id: product_id } = request.params;
    const { id: user_id } = request.user;

    const productsRepository = new ProductsRepository();
    const updateProductService = new UpdateProductService(productsRepository);


    const productUpdated = await updateProductService.execute({ price, product_id });


    response.json({
      message: "Produto atualizado!",
      productUpdated
    });

  }
}



module.exports = UpdateProductController;