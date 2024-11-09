import { CreatePollUseCase } from 'src/application/managers/create-poll.use-case';
import { GetPollsUseCase } from 'src/application/managers/get-polls.use-case';
import { VotePollUseCase } from 'src/application/managers/vote-poll.use-case';
import { CreatePollInput } from '../dtos/input/create-poll.input';
import { PollMapper } from 'src/domain/mappers/poll.mapper';
import { VotePollInput } from '../dtos/input/vote-poll.input';
export declare class PollController {
    private readonly createPollUseCase;
    private readonly getPollsUseCase;
    private readonly votePollUseCase;
    private readonly pollMapper;
    constructor(createPollUseCase: CreatePollUseCase, getPollsUseCase: GetPollsUseCase, votePollUseCase: VotePollUseCase, pollMapper: PollMapper);
    getPolls(): Promise<import("../../domain/entities/poll.entity").Poll[]>;
    createPoll(data: CreatePollInput): Promise<import("../../domain/entities/poll.entity").Poll>;
    votePoll(id: string, data: VotePollInput): Promise<import("../../domain/entities/vote.entity").Vote>;
}
