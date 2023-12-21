import { ApiProperty } from "@nestjs/swagger";
import { Room } from "./room.entity";
import { Comment } from "./comment.entity";
import { SchemaFactory } from "@nestjs/mongoose";

export class Area {
  @ApiProperty({
    example: 100.1,
    description: "Area longitude"
  })
  longitude: number;

  @ApiProperty({
    example: 100.1,
    description: "Area latitude"
  })
  latitude: number;

  @ApiProperty({
    example: 'Toà A3',
    description: "Area name"
  })
  name: string;

  @ApiProperty({
    example: 'Đây là toà nhà khoa Máy tính',
    description: "Area description"
  })
  description: string;

  @ApiProperty({
    example: '/images/area/A3.png',
    description: "Area avatar"
  })
  avatar: string;

  @ApiProperty({
    example: '[]',
    description: "List rooms located in this area"
  })
  rooms: [Room];

  @ApiProperty({
    example: '[]',
    description: "Comments about this area"
  })
  comments: [Comment];
}

export const AreaSchema = SchemaFactory.createForClass(Area);