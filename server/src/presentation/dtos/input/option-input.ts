import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty } from 'class-validator';

export class OptionInput {
  @ApiProperty()
  @IsEmpty()
  name: string;
}
