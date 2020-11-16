import { User } from './models/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserDTO } from './interfaces/user.dto';

@EntityRepository(User)
export class RobotRepository extends Repository<User> {
    createUser = async (userDto: UserDTO) => {
        return await this.save(userDto);
    };

    findOneUser = async (id: string) => {
        return this.findOneOrFail(id);
    };

    findAll = async () => {
        return this.findAll();
    }

    updateUser = async (id: string, userDto: UserDTO) => {
        return this.save({ ...userDto, id });
    };

    removeUser = async (id: string) => {
        await this.findOneOrFail(id);
        return this.delete(id);
    };
}