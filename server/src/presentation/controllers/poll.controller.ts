import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePollUseCase } from 'src/application/managers/create-poll.use-case';
import { GetPollsUseCase } from 'src/application/managers/get-polls.use-case';
import { VotePollUseCase } from 'src/application/managers/vote-poll.use-case';
import { CreatePollInput } from '../dtos/input/create-poll.input';
import { PollMapper } from 'src/domain/mappers/poll.mapper';
import { VotePollInput } from '../dtos/input/vote-poll.input';

@Controller('polls')
@ApiTags('polls')
export class PollController {
  constructor(
    private readonly createPollUseCase: CreatePollUseCase,
    private readonly getPollsUseCase: GetPollsUseCase,
    private readonly votePollUseCase: VotePollUseCase,
    private readonly pollMapper: PollMapper,
  ) {}

  @Get()
  @HttpCode(200)
  getPolls() {
    return this.getPollsUseCase.getPolls();
  }

  @Post()
  @HttpCode(200)
  createPoll(@Body() data: CreatePollInput) {
    const poll = this.pollMapper.mapToEntity(data);
    return this.createPollUseCase.createPoll(poll);
  }

  @Post('/:id/votes')
  @HttpCode(200)
  votePoll(@Param('id') id: string, @Body() data: VotePollInput) {
    return this.votePollUseCase.createPoll(
      parseInt(id),
      data.optionID,
      data.email,
    );
  }
}
