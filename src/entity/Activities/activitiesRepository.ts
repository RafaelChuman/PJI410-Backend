import { PostgresDS } from "@src/data-source";
import { DeleteResult, In } from "typeorm";
import { Activities } from "./activities";
import { IActivitiesRepository, ICreateActivityDTO, IDeleteActivityDTO, IUpdateActivityDTO } from "./IActivitiesRepository";

class ActivitiesRepository implements IActivitiesRepository{
    async listActivities(): Promise<Activities[]> {
        const categories = await PostgresDS.manager.find(Activities);
        
        return categories;
    }

    async createActivity(activitie: ICreateActivityDTO): Promise<Activities> {
    
        const newActivity = new Activities();

        newActivity.name = activitie.name;

        await PostgresDS.manager.save(newActivity);
    
        return newActivity;
    }

    async deleteActivityById(activitie: IDeleteActivityDTO): Promise<DeleteResult> {
        
        return await PostgresDS.manager.delete(
            Activities, {
                id: In(activitie.ids)
            });
    }

    async updateActivity(activitie: IUpdateActivityDTO): Promise<Activities | null> {
        
        const updtActivity = await PostgresDS.manager.findOneBy(
            Activities, {
                id: activitie.id
            });
        
        if(!updtActivity) return null;

        updtActivity.name = activitie.name;

        await PostgresDS.manager.save(Activities, updtActivity);

        return updtActivity;
    }
}

export {ActivitiesRepository}