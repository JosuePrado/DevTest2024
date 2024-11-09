import { Vote } from 'src/domain/entities/vote.entity';
import { IPollRepository } from 'src/infrastructure/repositories/interfaces/poll.interface.repository';
export declare class VotePollUseCase {
    private readonly pollRepository;
    constructor(pollRepository: IPollRepository);
    createPoll(pollID: number, optionID: number, email: string): Promise<Vote>;
}
