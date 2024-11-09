import { ApiProperty } from '@nestjs/swagger';
import { OptionInput } from './option-input';
import { IsAlphanumeric, IsEmpty, Min } from 'class-validator';

export class CreatePollInput {
  @ApiProperty()
  @IsEmpty()
  @IsAlphanumeric()
  name: string;

  @ApiProperty()
  @IsEmpty()
  @Min(2)
  options: OptionInput[];
}
