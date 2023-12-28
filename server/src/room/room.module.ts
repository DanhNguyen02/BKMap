import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { AreaSchema } from 'entities/area.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'buildings',
        schema: AreaSchema
      }
    ])
  ],
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomModule {}
