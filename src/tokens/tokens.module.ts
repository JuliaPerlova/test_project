import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { tokenProviders } from './tokens.provider';
import { TokensService } from './tokens.service';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    TokensService,
    ...tokenProviders
  ],
  exports: [TokensService]
})
export class TokensModule {}
