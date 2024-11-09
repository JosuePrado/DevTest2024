import { Poll } from 'src/domain/entities/poll.entity';
import { Vote } from 'src/domain/entities/vote.entity';
export interface IPollRepository {
    add(poll: Poll): Promise<Poll>;
    getAll(): Promise<Poll[]>;
    voteForPoll(pollID: number, OptionID: number, email: string): Promise<Vote>;
}
