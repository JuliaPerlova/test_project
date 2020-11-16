import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';

import { RobotDTO } from './interfaces/robot.dto';
import { RobotRepository } from './robots.repository';

@Injectable()
export class RobotsService {
    constructor(@InjectRepository(RobotRepository) private readonly robotRepository: RobotRepository) {}

    async getAll() {
        return await this.robotRepository.findAll();
    }

    async findOne(id: string) {
        return await this.robotRepository.findOneRobot(id);
    }

    async createRobot(createRobotDto: RobotDTO) {
        return await this.robotRepository.createRobot(createRobotDto);
    }

    async updateRobot(id: string, robotDto: RobotDTO) {
        return await this.robotRepository.updateRobot(id, robotDto);
    }

    async deleteRobot(id: string) {
        return await this.robotRepository.removeRobot(id);
    }

}