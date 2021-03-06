import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { UsersService } from './users.service';
import { UserDTO } from './interfaces/user.dto';

@Controller('users')
@ApiTags('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access token')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Patch('/:id')
  updateRobot(@Param('id') id: string, @Body() data: UserDTO) {
    return this.appService.updateUser(id, data);
  }

  @Delete('/:id')
  deleteRobot(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
