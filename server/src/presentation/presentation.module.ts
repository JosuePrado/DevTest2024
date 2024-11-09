import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { DomainModule } from 'src/domain/domain.module';
import { CreatePollInput } from './dtos/input/create-poll.input';
import { PollController } from './controllers/poll.controller';

@Module({
  imports: [ApplicationModule, DomainModule],
  controllers: [PollController],
  providers: [CreatePollInput],
})
export class PresentationModule {}
