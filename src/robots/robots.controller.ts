import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { RobotsService } from './robots.service';
import { RobotDTO } from './interfaces/robot.dto';

@Controller('robots')
@ApiTags('robots')
export class RobotsController {
    constructor(private readonly appService: RobotsService) {}

    @Get('/robots')
    getAll() {
        return this.appService.getAll();
    }
    
    @Post('/robots')
    createRobot(@Body() data: RobotDTO) {
        return this.appService.createRobot(data);
    }

    @Get('/robots/:id')
    findOne(@Param("id") id: string) {
        return this.appService.findOne(id);
    }

    @Patch('/robots/:id')
    updateRobot(@Param("id") id: string, @Body() data: RobotDTO) {
        return this.appService.updateRobot(id, data);
    }

    @Delete('/robots/:id')
    deleteRobot(@Param("id") id: string) {
        return this.appService.deleteRobot(id);
    }
}