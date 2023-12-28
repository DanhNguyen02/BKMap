import { Module } from '@nestjs/common';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AreaSchema } from 'entities/area.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'buildings',
        schema: AreaSchema
      }
    ])
  ],
  controllers: [AreaController],
  providers: [AreaService]
})
export class AreaModule {}
