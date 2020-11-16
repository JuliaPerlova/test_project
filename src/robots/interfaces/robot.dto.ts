import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, } from 'class-validator';

export class RobotDTO implements Readonly<RobotDTO> {
  @ApiProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;
}