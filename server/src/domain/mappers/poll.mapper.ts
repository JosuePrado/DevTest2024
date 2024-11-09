import { CreatePollInput } from 'src/presentation/dtos/input/create-poll.input';
import { Poll } from '../entities/poll.entity';
import { Option } from '../entities/option.entity';

export class PollMapper {
  mapToEntity(pollInput: CreatePollInput): Poll {
    const poll = new Poll();
    poll.name = pollInput.name;
    const options: Option[] = [];
    const optionsInput = pollInput.options;
    Option.idCont = 1;
    optionsInput.forEach((optionInput) => {
      const option = new Option();
      option.name = optionInput.name;
      option.votes = 0;
      options.push(option);
    });
    poll.options = options;
    return poll;
  }
}
