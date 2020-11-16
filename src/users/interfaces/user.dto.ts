import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsEmail } from 'class-validator';

export class  UserDTO implements Readonly<UserDTO> {
  @ApiProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString()
  username: string;

  @ApiProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;

}