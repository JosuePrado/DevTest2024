import { Inject, Injectable } from '@nestjs/common';
import { Vote } from 'src/domain/entities/vote.entity';
import { IPollRepository } from 'src/infrastructure/repositories/interfaces/poll.interface.repository';

@Injectable()
export class VotePollUseCase {
  constructor(
    @Inject('IPollRepository')
    private readonly pollRepository: IPollRepository,
  ) {}

  async createPoll(
    pollID: number,
    optionID: number,
    email: string,
  ): Promise<Vote> {
    return this.pollRepository.voteForPoll(pollID, optionID, email);
  }
}
