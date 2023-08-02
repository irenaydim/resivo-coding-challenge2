import { injectable } from 'tsyringe';
import { DoorDto } from '@/__mocks__/dtos/DoorDto';
import { doors } from '@/__mocks__/doors';

@injectable()
export class DoorRepository {
  public getAllDoors(): Promise<DoorDto[]> {
    
    // simulate async response
    return new Promise((resolve) => setTimeout(resolve, 2000, doors));
  }

  public getDoorById(id: string): Promise<DoorDto | undefined> {
    const foundDoor = doors.find((door) => door.id === id);

    // simulate async response
    return new Promise((resolve, reject) => id === '63f4d82ef04826419cc6eaeb' ? setTimeout(reject, 1000, 'Intended error') : setTimeout(resolve, 2000, foundDoor));
  }
}
