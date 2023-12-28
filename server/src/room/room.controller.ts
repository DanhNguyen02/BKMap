import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Room } from 'entities/room.entity';
import { Comment } from 'entities/comment.entity';

@Controller('room')
@ApiTags('Room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get('/:areaId')
  @ApiOperation({
    summary: 'Get all rooms',
    description: 'Get all rooms in database'
  })
  @ApiResponse({
    status: 200,
    description: 'Get all rooms successfully',
    type: [Room]
  })
  getAllRooms(@Param('areaId') areaId: number) {
    return this.roomService.getAllRooms(areaId);
  }

  @Get('/:areaId/:roomId')
  @ApiOperation({
    summary: 'Get room by id',
    description: 'Get room by id'
  })
  @ApiResponse({
    status: 200,
    description: 'Get room successfully',
    type: Room
  })
  getRoomById(@Param('areaId') areaId: number, @Param('roomId') roomId: number) {
    return this.roomService.getRoomById(areaId, roomId);
  }

  @Post('/comment')
  @ApiOperation({
    summary: 'Comment about room',
    description: 'Comment about room'
  })
  @ApiResponse({
    status: 200,
    description: 'Comment successfully',
  })
  handleComment(@Body() comment: Comment) {
    return "Comment nang ne qua. Ban thua do a";
  }
}
