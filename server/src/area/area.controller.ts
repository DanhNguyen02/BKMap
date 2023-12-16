import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AreaService } from './area.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Area } from 'entities/area.entity';
import { Comment } from 'entities/comment.entity';

@Controller('area')
@ApiTags('Area')
export class AreaController {
  constructor(private areaService: AreaService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all areas',
    description: 'Get all areas in database'
  })
  @ApiResponse({
    status: 200,
    description: 'Get all areas successfully',
    type: [Area]
  })
  getAllAreas() {
    return "Blackpink in your area";
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Get area by id',
    description: 'Get area by id'
  })
  @ApiResponse({
    status: 200,
    description: 'Get area successfully',
    type: Area
  })
  getAreaById(@Param('id') id: number) {
    return "Area id: " + id;
  }

  @Post('/comment')
  @ApiOperation({
    summary: 'Comment about area',
    description: 'Comment about area'
  })
  @ApiResponse({
    status: 200,
    description: 'Comment successfully',
  })
  handleComment(@Body() comment: Comment) {
    return "Comment nang ne qua. Ban thua do a";
  }
}
