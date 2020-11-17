import {
    Controller,
    Post,
    Body,
    Param,
    Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDTO } from '../users/interfaces/user.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
@ApiTags('authentication')
export class AuthController {
    constructor(private readonly appService: AuthService) {}

    @Post('/auth/login')
    login(@Body() {email, password}: LoginDto) {
        return this.appService.login(email, password);
    }

    @Post('/auth/sign_up')
    signUp(@Body() data: UserDTO) {
        return this.appService.signUp(data);
    }

    @Delete('/auth/logout/:token')
    logout(@Param('token') token: string) {
        return this.appService.logout(token);
    }
}
