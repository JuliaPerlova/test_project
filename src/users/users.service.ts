import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

import { UserDTO } from './interfaces/user.dto';
import { User } from "./models/user.entity";

@Injectable()
export class UsersService {
    constructor(@Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,) {}

    private async hashPass(password: string) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async getAll() {
        return await this.userRepository.find();
    }

    async findOne(id: string) {
        return await this.userRepository.findOneOrFail(id);
    }

    async findUserByEmail(email: string) {
        return await this.userRepository.find({ email });
    }
    
    async createUser(createUserDto: UserDTO) {
        const password = await this.hashPass(createUserDto.password);
        return await this.userRepository.save({ ...createUserDto, password });
    }

    async updateUser(id: string, userDto: UserDTO) {
        if (userDto.password) {
            const password = await this.hashPass(userDto.password);
            userDto.password = password;
        }
        return await this.userRepository.update(id, userDto);
    }

    async deleteUser(id: string) {
        return await this.userRepository.delete(id);
    }

}