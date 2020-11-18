import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, } from 'class-validator';

export class RobotDTO implements Readonly<RobotDTO> {
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;
}