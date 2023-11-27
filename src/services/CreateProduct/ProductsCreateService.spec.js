const UserRepositoryInMemory = require("../../repositories/Users/UserRepositoryInMemory");
const ProductsRepositoryInMemory = require("../../repositories/Products/ProductsRepositoryInMemory");
const UsersCreateService = require("../../services/Users/UsersCreateService");
const SessionsCreateService = require("../../services/Session");
const ProductsCreateService = require("../../services/CreateProduct/ProductsCreateService");

describe("SessionsCreateService", ()=> {
let usersRepositoryInMemory = null;
let usersCreateService = null;
let sessionsCreateService = null;
let productsRepositoryInMemory = null;
let productsCreateService = null;


beforeEach(() => {
 usersRepositoryInMemory = new UserRepositoryInMemory();
 usersCreateService = new UsersCreateService(usersRepositoryInMemory);
 sessionsCreateService = new SessionsCreateService(usersRepositoryInMemory);
 productsRepositoryInMemory = new ProductsRepositoryInMemory();
 productsCreateService = new ProductsCreateService(productsRepositoryInMemory);
});

 it("Should be create a product", ()=>{
  
 });
 
});