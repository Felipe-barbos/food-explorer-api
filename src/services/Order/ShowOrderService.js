const AppError = require("../../utils/AppError");




class ShowOrderService {

  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository;
  }

  async execute({ order_id, user_id }) {

    const order = await this.ordersRepository.showOrder(order_id);
    if (order.user_id === user_id) {
      return order;
    }
    else {
      throw new AppError("Pedido não é do usuário em questão.");
    }

  }
}


module.exports = ShowOrderService;