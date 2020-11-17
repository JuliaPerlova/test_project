import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsEmail, IsDate } from 'class-validator';
import { User } from 'src/users/models/user.entity';
import { DeepPartial } from 'typeorm';

export class TokenDTO implements Readonly<TokenDTO> {
  @IsUUID()
  id?: string;

  @ApiProperty({ required: true })
  @IsString()
  token: string;

  @ApiProperty({ required: true })
  @IsEmail()
  author: User | DeepPartial<User>;

  expireDateTime: Date;
}
