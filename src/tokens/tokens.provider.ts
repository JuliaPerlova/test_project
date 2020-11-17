import { Connection, Repository } from 'typeorm';
import { Token } from './models/token.entity';

export const tokenProviders = [
  {
    provide: 'TOKEN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Token),
    inject: ['DATABASE_CONNECTION'],
  },
];