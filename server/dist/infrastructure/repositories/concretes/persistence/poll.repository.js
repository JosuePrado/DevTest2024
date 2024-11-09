"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollRepositoryPersistence = void 0;
const poll_entity_1 = require("../../../../domain/entities/poll.entity");
const vote_entity_1 = require("../../../../domain/entities/vote.entity");
class PollRepositoryPersistence {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(poll) {
        this.prisma.my_poll.create({
            data: {
                name: poll.name,
                option_poll: {
                    create: poll.options,
                },
            },
        });
        return poll;
    }
    async getAll() {
        const pollsPrisma = await this.prisma.my_poll.findMany({
            include: {
                option_poll: true,
            },
        });
        const polls = [];
        pollsPrisma.forEach((pollPrisma) => {
            const poll = new poll_entity_1.Poll();
            poll.id = pollPrisma.id;
            poll.name = pollPrisma.name;
            poll.options = pollPrisma.option_poll;
            polls.push(poll);
        });
        return polls;
    }
    async voteForPoll(pollID, optionID, email) {
        const poll = await this.prisma.my_poll.findFirst({
            where: {
                id: pollID,
            },
            include: {
                option_poll: true,
            },
        });
        const vote = new vote_entity_1.Vote();
        vote.email = email;
        vote.pollID = pollID;
        vote.optionID = optionID;
        if (poll !== null) {
            const option = poll.option_poll.at(optionID);
            option.votes++;
        }
        return vote;
    }
}
exports.PollRepositoryPersistence = PollRepositoryPersistence;
//# sourceMappingURL=poll.repository.js.map