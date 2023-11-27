const UserCreateService = require("./UsersCreateService");
const UserRepositoryInMemory = require("../../repositories/Users/UserRepositoryInMemory");
const AppError = require("../../utils/AppError");


describe("UserCreateService", () => {


  let userRepositoryInMemory = null;
  let userCreateService = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepositoryInMemory);
  });


  it("User should be create", async () => {
    const user = {
      name: "teste 1",
      email: "teste@gmail.com",
      password: "testeteste"
    }


    const userCreated = await userCreateService.execute(user);

    expect(userCreated).toHaveProperty("id");
  });


  it("Should be not created user ifd email alrealy exists", async () => {
    const user = {
      name: "teste 1",
      email: "teste@gmail.com",
      password: "testeteste"
    }

    const user2 = {
      name: "teste 2",
      email: "teste@gmail.com",
      password: "paladino"
    }

    await userCreateService.execute(user);

    await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."));
  });


  it("Should be not created user if password small", async () => {

    const user = {
      name: "teste 1",
      email: "teste@gmail.com",
      password: "teste"
    }


    await expect(userCreateService.execute(user)).rejects.toEqual(new AppError("Senha somente com 8 caracteres ou mais!"));
  });


});