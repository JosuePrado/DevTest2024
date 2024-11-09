import { Module } from '@nestjs/common';
import { Poll } from './entities/poll.entity';
import { Vote } from './entities/vote.entity';
import { PollMapper } from './mappers/poll.mapper';
import { Option } from './entities/option.entity';

@Module({
  providers: [Option, Poll, Vote, PollMapper],
  exports: [Option, Poll, Vote, PollMapper],
})
export class DomainModule {}
