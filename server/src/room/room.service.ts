import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Area, AreaDocument } from 'entities/area.entity';
import { Room } from 'entities/room.entity';
import { Model } from 'mongoose';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel("buildings") private readonly buildingModel: Model<AreaDocument>
  ) {}

  async getAllRooms(areaId: number): Promise<[Room]> {
    const response: Area = await this.buildingModel.findOne({ id: areaId }, { _id: 0}).lean()
    return response.rooms
  }

  async getRoomById(areaId: number, roomId: number): Promise<Room> {
    const response: Area = await this.buildingModel.findOne({ id: areaId }, { _id: 0}).lean()
    return response.rooms.filter(room => room.id == roomId)[0]
  }
}
