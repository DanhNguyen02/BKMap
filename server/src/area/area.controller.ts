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
    return this.areaService.getAllAreas();
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
    return this.areaService.getAreaById(id);
  }

  @Post('/:id/comment')
  @ApiOperation({
    summary: 'Comment about area',
    description: 'Comment about area'
  })
  @ApiResponse({
    status: 200,
    description: 'Comment successfully',
  })
  handleComment(@Param('id') id: number, @Body() comment: Comment) {
    return this.areaService.postCommment(id, comment);
  }
}
