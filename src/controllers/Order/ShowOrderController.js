const OrdersRepository = require("../../repositories/Orders/OrdersRepository");
const ShowOrderService = require("../../services/Order/ShowOrderService");

class ShowOrderController {
  async handle(request, response) {
    const { id: order_id } = request.params;
    const { id: user_id } = request.user;




    const ordersRepository = new OrdersRepository();
    const showOrderService = new ShowOrderService(ordersRepository);



    const order = await showOrderService.execute({ order_id, user_id });


    response.json(order);

  }
}


module.exports = ShowOrderController;