import { Poll } from 'src/domain/entities/poll.entity';
import { IPollRepository } from 'src/infrastructure/repositories/interfaces/poll.interface.repository';
export declare class GetPollsUseCase {
    private readonly pollRepository;
    constructor(pollRepository: IPollRepository);
    getPolls(): Promise<Poll[]>;
}
