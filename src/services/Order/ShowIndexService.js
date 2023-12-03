const AppError = require("../../utils/AppError");



class ShowIndexService {

  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository;
  }


  async execute(user_id) {

    const index = await this.ordersRepository.showIndex(user_id);

    if (!index) {
      throw new AppError("Não há nenhum pedido efetuado por este usuário!");
    }


    return index;
  }
}



module.exports = ShowIndexService;