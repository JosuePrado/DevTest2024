import { Poll } from 'src/domain/entities/poll.entity';
import { Vote } from 'src/domain/entities/vote.entity';
import { IPollRepository } from '../../interfaces/poll.interface.repository';
export declare class PollRepositoryMemory implements IPollRepository {
    private readonly polls;
    add(poll: Poll): Promise<Poll>;
    getAll(): Promise<Poll[]>;
    voteForPoll(pollID: number, optionID: number, email: string): Promise<Vote>;
}
