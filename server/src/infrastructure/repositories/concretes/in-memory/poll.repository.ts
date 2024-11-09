import { Poll } from 'src/domain/entities/poll.entity';
import { Vote } from 'src/domain/entities/vote.entity';
import { IPollRepository } from '../../interfaces/poll.interface.repository';

export class PollRepositoryMemory implements IPollRepository {
  private readonly polls = new Map<number, Poll>();

  async add(poll: Poll): Promise<Poll> {
    const id = poll.id;
    poll.id = id;
    this.polls.set(id, poll);
    return poll;
  }
  async getAll(): Promise<Poll[]> {
    console.log(this.polls.keys());
    return Array.from(this.polls.values());
  }

  async voteForPoll(
    pollID: number,
    optionID: number,
    email: string,
  ): Promise<Vote> {
    const poll = this.polls.get(pollID);
    const vote = new Vote();
    vote.email = email;
    vote.pollID = pollID;
    vote.optionID = optionID;
    if (poll !== null) {
      const option = poll.options.at(optionID);

      option.votes++;
    }

    return vote;
  }
}
