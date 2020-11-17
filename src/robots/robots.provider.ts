import { Connection, Repository } from 'typeorm';
import { Robot } from './models/robot.entity';

export const robotProviders = [
  {
    provide: 'ROBOT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Robot),
    inject: ['DATABASE_CONNECTION'],
  },
];