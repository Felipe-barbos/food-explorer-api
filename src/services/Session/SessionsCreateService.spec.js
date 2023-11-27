const SessionsCreateService = require("./SessionsCreateService");
const UserRepositoryInMemory = require("../../repositories/Users/UserRepositoryInMemory");
const UserCreateService = require("../Users/UsersCreateService");
const AppError = require("../../utils/AppError");

describe("SessionsCreateService", () => {
  let sessionsCreateService = null;
  let usersCreateService = null;
  let usersRepositoryInMemory = null;


  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    usersCreateService = new UserCreateService(usersRepositoryInMemory);
    sessionsCreateService = new SessionsCreateService(usersRepositoryInMemory);
  });


  it("should be create session in user", async () => {
    const user = {
      name: "teste 1",
      email: "teste@gmail.com",
      password: "testeteste"
    }

    await usersCreateService.execute(user);


    const index = await sessionsCreateService.execute({ email: user.email, password: user.password });

    expect(index).toHaveProperty("token");
  });


  it("should be not create session user if email or password incorrect", async () => {
    const user = {
      name: "teste 1",
      email: "teste@gmail.com",
      password: "testeteste"
    }

    await usersCreateService.execute(user);

    await expect(sessionsCreateService.execute({ email: user.email, password: "polares" })).rejects.toEqual(new AppError("E-mail e/ou senha incorreta", 401));
  });
});