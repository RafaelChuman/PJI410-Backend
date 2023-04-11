import { Activities } from "@src/entity/Activities/activities";
import { ActivitiesRepository } from "@src/entity/Activities/activitiesRepository";
import { ICreateActivityDTO } from "@src/entity/Activities/IActivitiesRepository";
import {Request, Response} from "express";

class CreateActivityUseCase{

    async handle(request: Request, response: Response): Promise<Response> {

        const data: ICreateActivityDTO = {
            name: request.body.name
        };

        const categoryRepository = new ActivitiesRepository();

        const resp = await categoryRepository.createActivity(data);
        return response.status(200).json(resp);
    }


}

export {CreateActivityUseCase}