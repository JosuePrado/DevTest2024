import { my_poll } from '@prisma/client';
import { Option } from './option.entity';

export class Poll implements my_poll {
  static idCont: number = 0;
  id: number = Poll.idCont++;
  name: string;
  options: Option[];
}
