import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { RobotsController } from './robots.controller';
import { robotProviders } from './robots.provider';
import { RobotsService } from './robots.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RobotsController],
  providers: [
    RobotsService,
    ...robotProviders
  ],
})
export class RobotsModule {}
