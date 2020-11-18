import { Module } from '@nestjs/common';

import 'dotenv/config';

import { UsersModule } from './users/users.module';
import { RobotsModule } from './robots/robots.module';
import { TokensModule } from './tokens/tokens.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RobotsModule,
    UsersModule,
    TokensModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
