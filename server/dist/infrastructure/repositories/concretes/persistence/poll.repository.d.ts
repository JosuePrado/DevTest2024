import { Poll } from 'src/domain/entities/poll.entity';
import { Vote } from 'src/domain/entities/vote.entity';
import { IPollRepository } from '../../interfaces/poll.interface.repository';
import { PrismaService } from 'src/infrastructure/repositories/concretes/persistence/prisma.service';
export declare class PollRepositoryPersistence implements IPollRepository {
    private prisma;
    constructor(prisma: PrismaService);
    add(poll: Poll): Promise<Poll>;
    getAll(): Promise<Poll[]>;
    voteForPoll(pollID: number, optionID: number, email: string): Promise<Vote>;
}
