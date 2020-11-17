import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import 'dotenv/config';

//import { config } from './ormconfig';
import { UsersModule } from './users/users.module';
import { RobotsModule } from './robots/robots.module';
import { TokensModule } from './tokens/tokens.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    //TypeOrmModule.forRoot(config),
    RobotsModule,
    UsersModule,
    TokensModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
