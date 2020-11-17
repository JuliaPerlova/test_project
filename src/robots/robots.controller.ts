import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiHeader, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { RobotsService } from './robots.service';
import { RobotDTO } from './interfaces/robot.dto';

@Controller('robots')
@ApiTags('robots')
@ApiBearerAuth('access token')
@UseGuards(JwtAuthGuard)
export class RobotsController {
  constructor(private readonly appService: RobotsService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Post()
  createRobot(@Body() data: RobotDTO) {
    return this.appService.createRobot(data);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Patch('/:id')
  updateRobot(@Param('id') id: string, @Body() data: RobotDTO) {
    return this.appService.updateRobot(id, data);
  }

  @Delete('/:id')
  deleteRobot(@Param('id') id: string) {
    return this.appService.deleteRobot(id);
  }
}
