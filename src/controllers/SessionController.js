const UsersRepository = require("../repositories/Users/UsersRepository");
const SessionCreateService = require("../services/Session/SessionsCreateService");

class SessionController {

  async handle(request, response) {
    const { email, password } = request.body;


    const usersRepository = new UsersRepository();
    const sessionCreateService = new SessionCreateService(usersRepository);

    const index = await sessionCreateService.execute({ email, password });

    const { user, token } = index;

    delete user.password;

    response.status(201).json({ token, user });


  }
}


module.exports = SessionController;