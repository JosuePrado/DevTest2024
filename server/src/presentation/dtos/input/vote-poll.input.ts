import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class VotePollInput {
  @ApiProperty()
  optionID: number;

  @ApiProperty()
  @IsEmail()
  email: string;
}
