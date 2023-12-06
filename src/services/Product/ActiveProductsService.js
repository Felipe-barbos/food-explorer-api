

class ActiveProductsService {


  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute(product_id) {

    const product = await this.productsRepository.activeProduct({ product_id, isActive: true });


    return product;
  }
}


module.exports = ActiveProductsService;