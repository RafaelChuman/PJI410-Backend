import {  CreateActivityUseCase } from "./createActivityUseCase"
import { DeleteActivityUseCase } from "./deleteActivityUseCase";
import {  ListActivitiesUseCase } from "./listActivitiesUseCase";
import { UpdateActivityUseCase } from "./updateActivityUseCase";

const createActivity = new CreateActivityUseCase();
const listActivities = new ListActivitiesUseCase();
const deleteActivity = new DeleteActivityUseCase();
const updateActivity = new UpdateActivityUseCase();

export {createActivity, listActivities, deleteActivity, updateActivity}
