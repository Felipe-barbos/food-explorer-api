const AppError = require("../../utils/AppError");
const DiskStorage = require("../../providers/DiskStorage");


class ProductsAvatarService {

  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute({ product_id, avatarFileName }) {

    const diskStorage = new DiskStorage();

    const product = await this.productRepository.showProduct(product_id);

    if (!product) {
      throw new AppError("Somente produtos cadastrados podem ter avatar alterado!", 404);
    }

    if (product.avatar) {
      await diskStorage.deleteFile(product.avatar);
    }


    const filename = await diskStorage.saveFile(avatarFileName);




    const avatarUpdated = await this.productRepository.updatedAvatar({ product_id, filename });

    return avatarUpdated;
  }
}




module.exports = ProductsAvatarService;
