import { Poll } from 'src/domain/entities/poll.entity';
import { Vote } from 'src/domain/entities/vote.entity';
import { IPollRepository } from '../../interfaces/poll.interface.repository';
import { PrismaService } from 'src/infrastructure/repositories/concretes/persistence/prisma.service';

export class PollRepositoryPersistence implements IPollRepository {
  constructor(private prisma: PrismaService) {}

  async add(poll: Poll): Promise<Poll> {
    this.prisma.my_poll.create({
      data: {
        name: poll.name,
        option_poll: {
          create: poll.options,
        },
      },
    });

    return poll;
  }

  async getAll(): Promise<Poll[]> {
    const pollsPrisma = await this.prisma.my_poll.findMany({
      include: {
        option_poll: true,
      },
    });
    const polls: Poll[] = [];

    pollsPrisma.forEach((pollPrisma) => {
      const poll = new Poll();
      poll.id = pollPrisma.id;
      poll.name = pollPrisma.name;
      poll.options = pollPrisma.option_poll;
      polls.push(poll);
    });

    return polls;
  }

  async voteForPoll(
    pollID: number,
    optionID: number,
    email: string,
  ): Promise<Vote> {
    const poll = await this.prisma.my_poll.findFirst({
      where: {
        id: pollID,
      },
      include: {
        option_poll: true,
      },
    });
    const vote = new Vote();
    vote.email = email;
    vote.pollID = pollID;
    vote.optionID = optionID;
    if (poll !== null) {
      const option = poll.option_poll.at(optionID);
      option.votes++;
    }

    return vote;
  }
}
