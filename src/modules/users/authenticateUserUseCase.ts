import { compare } from "bcrypt";
import { AppError } from "@errors/AppError";
import { sign } from "jsonwebtoken";
import { Response, Request } from "express";
import { UsersRepository } from "@src/entity/Users/UsersRepository";
import { IUserTokenDTO } from "@src/entity/Users/IUsersRepository";


class AuthenticaUserUseCase{

    async execute(request:Request, response:Response):Promise<Response>{

        const userRespository = new UsersRepository();
        const {userName, password} = request.body;

        const user = await userRespository.findByUserName(userName);

        if(!user){
            throw new AppError("User or password inconrrect.")
        }

        const passwordMatch = await compare(password, user.password);


        if(!passwordMatch){
            throw new AppError("User or password inconrrect.")
        }

        const token = sign({}, "brasil123", {
            subject: user.id,
            expiresIn: "10h"            
        })

        const resp: IUserTokenDTO = {
            user:{
                userName: user.userName,
            },
            token: token,
        };
       
        return response.status(200).json(resp);

    }
}

export {AuthenticaUserUseCase}