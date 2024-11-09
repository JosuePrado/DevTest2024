import { option_poll } from '@prisma/client';

export class Option implements option_poll {
  static idCont: number = 0;
  poll_id: number;
  id: number = Option.idCont++;
  name: string;
  votes: number;
}
