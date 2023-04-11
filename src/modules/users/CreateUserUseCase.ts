import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { Response, Request } from "express";
import { ICreateUserDTO } from "@src/entity/Users/IUsersRepository";
import { UsersRepository } from "@src/entity/Users/UsersRepository";

class CreateUserUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const data: ICreateUserDTO = {
      name: request.body.name,
      password: request.body.password,
      userName: request.body.userName,
      isAdmin: false,
    };
    const usersRepository = new UsersRepository();

    const userNameAlredyExist = await usersRepository.findByUserName(data.userName);

    if (!data.password || !data.userName ) {
      throw new AppError("Data out of bounds.");
    }

    if (userNameAlredyExist) {
      throw new AppError("User Already Exists.");
    }

    const passwordHash = await hash(data.password, 8);

    data.password = passwordHash;

    const resp = await usersRepository.create(data);

    return response.status(200).json(resp);
  }
}

export { CreateUserUseCase };
