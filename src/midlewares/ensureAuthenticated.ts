import { AppError } from "@errors/AppError";
import { UsersRepository } from "@src/entity/Users/UsersRepository";
import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    //Bearer dkdfvmdlkfvmkdm
    const token = request.headers.authorization;

    if(!token)
    {
        throw new AppError("Token Missing", 401);
    }

    try{        
        const decoded = verify(token, "brasil123");

        if(!decoded.sub)
        {
            throw new  AppError("User does not exist.", 401)
        }

        const userId = decoded.sub.toString();

        const userRespository = new UsersRepository();
        
        const user = await userRespository.findById(userId);

        if(!user){
            throw new  AppError("User does not exist.", 401)
        }

        //Trow the user Paramrs to the next function. So after the validation midleware
        //We don't need to ask to the database for the datas of ho is logged
        //We have this problem because the Token only pass the ID and nothing more
        request.headers.userId =   user.id.toString();
        request.headers.userName = user.userName.toString();
        request.headers.isAdmin =  user.isAdmin.toString(); 

        next();
    }catch{
        throw new AppError("Invalid Token", 401);
    }        
} 
    
