import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { IDeleteERDTO } from "@entity/ERs/IERsRepository";
import { ERsRepository } from "@src/entity/ERs/ERsRepository";
import { idText } from "typescript";

export class DeleteER {
  async execute(request: Request, response: Response): Promise<Response> {
    const erRespository = new ERsRepository();
    const idParam: string[] = request.body.ids;

    if (idParam.length > 0) {
      const data: IDeleteERDTO = {
        ids: idParam,
      };

      const resp = await erRespository.deleteERById(data);

      return response.status(200).json(resp);
    }

    return response.status(200).json("Database not modified.");
  }
}
