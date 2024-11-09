"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollMapper = void 0;
const poll_entity_1 = require("../entities/poll.entity");
const option_entity_1 = require("../entities/option.entity");
class PollMapper {
    mapToEntity(pollInput) {
        const poll = new poll_entity_1.Poll();
        poll.name = pollInput.name;
        const options = [];
        const optionsInput = pollInput.options;
        option_entity_1.Option.idCont = 1;
        optionsInput.forEach((optionInput) => {
            const option = new option_entity_1.Option();
            option.name = optionInput.name;
            option.votes = 0;
            options.push(option);
        });
        poll.options = options;
        return poll;
    }
}
exports.PollMapper = PollMapper;
//# sourceMappingURL=poll.mapper.js.map