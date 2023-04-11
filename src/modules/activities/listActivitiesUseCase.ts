import { ActivitiesRepository } from "@src/entity/Activities/activitiesRepository";
import { Response, Request } from "express";

class ListActivitiesUseCase {
    async handle(request: Request, response: Response): Promise<Response>{

        const categoriesRepository = new ActivitiesRepository();

        const resp = await categoriesRepository.listActivities()

        return response.status(202).json(resp);
    }
}

export {ListActivitiesUseCase}