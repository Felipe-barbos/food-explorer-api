const OrdersRepository = require("../../repositories/Orders/OrdersRepository");
const ShowIndexService = require("../../services/Order/ShowIndexService");


class ShowIndexController {


  async handle(request, response) {
    const { id: user_id } = request.user;


    const ordersRepository = new OrdersRepository();
    const showIndexService = new ShowIndexService(ordersRepository);


    const index = await showIndexService.execute(user_id);



    response.json(index);



  }


}


module.exports = ShowIndexController;