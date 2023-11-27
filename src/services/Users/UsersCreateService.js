const { hash } = require("bcryptjs");
const AppError = require("../../utils/AppError");



class UsersCreateService {


  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }


  async execute({ name, email, password }) {

    // verificando se o e-mail é válido

    if (!email.includes("@") || !email.includes(".")) {
      throw new AppError("Digite um e-mail válido.");
    }

    const checkuser = await this.usersRepository.findByEmail(email);

    if (checkuser) {
      throw new AppError("Este e-mail já está em uso.");
    }



    //verificando se a senha contém menos que 8 caracteres

    if (password.length < 8) {
      throw new AppError("Senha somente com 8 caracteres ou mais!");
    }


    //convertendo a senha para hash

    const hashPassword = await hash(password, 8);


    //criando um usuário no BD
    const user_id = await this.usersRepository.createUser({ name, email, password: hashPassword });

    return user_id;
  }
}


module.exports = UsersCreateService;