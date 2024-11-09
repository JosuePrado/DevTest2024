import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { InfrastructureModule } from 'src/infrastructure/Infrastructure.module';
import { CreatePollUseCase } from './managers/create-poll.use-case';
import { GetPollsUseCase } from './managers/get-polls.use-case';
import { VotePollUseCase } from './managers/vote-poll.use-case';

@Module({
  imports: [DomainModule, InfrastructureModule],
  controllers: [],
  providers: [CreatePollUseCase, GetPollsUseCase, VotePollUseCase],
  exports: [CreatePollUseCase, GetPollsUseCase, VotePollUseCase],
})
export class ApplicationModule {}
