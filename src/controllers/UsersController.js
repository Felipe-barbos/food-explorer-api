

const UsersRepository = require("../repositories/Users/UsersRepository");
const UserCreateService = require("../services/Users/UsersCreateService");


class UsersController {

  async handle(request, response) {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const userCreateService = new UserCreateService(usersRepository);

    const user_id = await userCreateService.execute({ name, email, password });


    response.json({
      message: "Usuário criado com sucesso",
      id: user_id
    });

  }
}


module.exports = UsersController;