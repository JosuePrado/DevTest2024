"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollRepositoryMemory = void 0;
const vote_entity_1 = require("../../../../domain/entities/vote.entity");
class PollRepositoryMemory {
    constructor() {
        this.polls = new Map();
    }
    async add(poll) {
        const id = poll.id;
        poll.id = id;
        this.polls.set(id, poll);
        return poll;
    }
    async getAll() {
        console.log(this.polls.keys());
        return Array.from(this.polls.values());
    }
    async voteForPoll(pollID, optionID, email) {
        const poll = this.polls.get(pollID);
        const vote = new vote_entity_1.Vote();
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
exports.PollRepositoryMemory = PollRepositoryMemory;
//# sourceMappingURL=poll.repository.js.map