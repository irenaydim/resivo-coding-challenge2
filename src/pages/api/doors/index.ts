import 'reflect-metadata';
import type { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import { Door } from '@/models/Door';
import { ApiHandler } from '@/server/lib/ApiHandler';
import { GetDoorListUseCase } from '@/server/useCases/GetDoorListUseCase';

const getDoorListUseCase = container.resolve(GetDoorListUseCase);

export default new ApiHandler()
  .get(async (request: NextApiRequest, response: NextApiResponse<Door[] | Error>) => {
    try {
      const data = await getDoorListUseCase.execute();
      response.status(200).json(data);
    } catch (err) {
      response.status(400).json(err as Error);
    }
  })
  .getHandler();
