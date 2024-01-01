import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Area, AreaDocument } from 'entities/area.entity';
import { Comment } from 'entities/comment.entity';
import { Model } from 'mongoose';

@Injectable()
export class AreaService {
  constructor(
    @InjectModel('buildings') private readonly buildingModel: Model<AreaDocument>
  ) {}

  async getAllAreas(): Promise<[Area]> {
    const response: [Area] = await this.buildingModel.find({}, {_id: 0}).lean()
    return response
  }

  async getAreaById(areaId: number): Promise<Area> {
    const response: Area = await this.buildingModel.findOne({ id: areaId }, { _id: 0 }).lean()
    return response
  }

  async postCommment(areaId: number, comment: Comment) {
    console.log(areaId)
    const response: Area = await this.buildingModel.findOne({ id: areaId }, { _id: 0 }).lean()
    let listComments = response.comments
    listComments.push(comment)
    console.log(listComments)
    const res = await this.buildingModel.updateOne(
      { id: areaId },
      { $set: { comments: listComments } }
    ).lean()
    return res
  }
}
