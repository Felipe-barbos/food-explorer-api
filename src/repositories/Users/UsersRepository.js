const knex = require("../../database/knex");

class UsersRepository {

  async findByEmail(email) {

    const user = await knex("users").where({ email: email }).first();

    return user;
  }

  async createUser({ name, email, password }) {
    const [user_id] = await knex("users").insert({
      name,
      email,
      password
    });

    return { id: user_id };
  }

}

module.exports = UsersRepository;