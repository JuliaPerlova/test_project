import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { RobotDTO } from './interfaces/robot.dto';
import { Robot } from "./models/robot.entity";

@Injectable()
export class RobotsService {
    constructor(@Inject('ROBOT_REPOSITORY')
    private robotRepository: Repository<Robot>,) {}

    async getAll() {
        return await this.robotRepository.find();
    }

    async findOne(id: string) {
        return await this.robotRepository.findOneOrFail(id);
    }

    async createRobot(createRobotDto: RobotDTO) {
        return await this.robotRepository.save(createRobotDto);
    }

    async updateRobot(id: string, robotDto: RobotDTO) {
        return await this.robotRepository.update(id, robotDto);
    }

    async deleteRobot(id: string) {
        return await this.robotRepository.delete(id);
    }

}