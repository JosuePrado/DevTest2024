import { CreatePollInput } from 'src/presentation/dtos/input/create-poll.input';
import { Poll } from '../entities/poll.entity';
export declare class PollMapper {
    mapToEntity(pollInput: CreatePollInput): Poll;
}
