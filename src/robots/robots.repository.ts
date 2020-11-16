import { Robot } from './models/robot.entity';
import { EntityRepository, Repository } from 'typeorm';
import { RobotDTO } from './interfaces/robot.dto';

@EntityRepository(Robot)
export class RobotRepository extends Repository<Robot> {
    createRobot = async (robotDto: RobotDTO) => {
        return await this.save(robotDto);
    };

    findOneRobot = async (id: string) => {
        return this.findOneOrFail(id);
    };

    findAll = async () => {
        return this.findAll();
    }

    updateRobot = async (id: string, robotDto: RobotDTO) => {
        return this.save({ ...robotDto, id });
    };

    removeRobot = async (id: string) => {
        await this.findOneOrFail(id);
        return this.delete(id);
    };
}