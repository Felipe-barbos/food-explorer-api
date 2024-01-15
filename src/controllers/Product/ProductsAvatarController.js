const ProductsRepository = require("../../repositories/Products/ProductsRepository");
const ProductsAvatarService = require("../../services/Product/ProductsAvatarService");

class ProductsAvatarController {

  async handle(request, response) {
    const { product_id } = request.params;
    const avatarFileName = request.file.filename;

    console.log(product_id);


    const productsRepository = new ProductsRepository();
    const productsAvatarService = new ProductsAvatarService(productsRepository);

    const avatarUpdated = await productsAvatarService.execute({ product_id, avatarFileName });


    response.json({
      message: "Avatar atualizado!",
      avatarUpdated
    });


  }
}

module.exports = ProductsAvatarController;