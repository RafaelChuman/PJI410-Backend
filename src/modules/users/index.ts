import { AuthenticaUserUseCase } from "./authenticateUserUseCase";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ListUserUseCase } from "./ListUserUseCase";



const listUserUseCase = new ListUserUseCase()
const authenticaUserUseCase = new AuthenticaUserUseCase();
const createUserUseCase = new CreateUserUseCase();

export{
    listUserUseCase, 
    authenticaUserUseCase,
    createUserUseCase,
}