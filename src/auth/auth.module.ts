import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { TokensModule } from 'src/tokens/tokens.module';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
      UsersModule,
      TokensModule,
      PassportModule,
      JwtModule.register({
        secret: `${process.env.JWT_SECRET}`,
        signOptions: { expiresIn: '1d' },
      }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, JwtStrategy
  ],
})
export class AuthModule {}
