import { my_poll } from '@prisma/client';
import { Option } from './option.entity';
export declare class Poll implements my_poll {
    static idCont: number;
    id: number;
    name: string;
    options: Option[];
}
