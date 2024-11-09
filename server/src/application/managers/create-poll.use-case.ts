import { Inject, Injectable } from '@nestjs/common';
import { Poll } from 'src/domain/entities/poll.entity';
import { IPollRepository } from 'src/infrastructure/repositories/interfaces/poll.interface.repository';

@Injectable()
export class CreatePollUseCase {
  constructor(
    @Inject('IPollRepository')
    private readonly pollRepository: IPollRepository,
  ) {}

  async createPoll(poll: Poll): Promise<Poll> {
    return this.pollRepository.add(poll);
  }
}
