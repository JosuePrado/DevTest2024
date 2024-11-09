import { option_poll } from '@prisma/client';
export declare class Option implements option_poll {
    static idCont: number;
    poll_id: number;
    id: number;
    name: string;
    votes: number;
}
