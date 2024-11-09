"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_poll_use_case_1 = require("../../application/managers/create-poll.use-case");
const get_polls_use_case_1 = require("../../application/managers/get-polls.use-case");
const vote_poll_use_case_1 = require("../../application/managers/vote-poll.use-case");
const create_poll_input_1 = require("../dtos/input/create-poll.input");
const poll_mapper_1 = require("../../domain/mappers/poll.mapper");
const vote_poll_input_1 = require("../dtos/input/vote-poll.input");
let PollController = class PollController {
    constructor(createPollUseCase, getPollsUseCase, votePollUseCase, pollMapper) {
        this.createPollUseCase = createPollUseCase;
        this.getPollsUseCase = getPollsUseCase;
        this.votePollUseCase = votePollUseCase;
        this.pollMapper = pollMapper;
    }
    getPolls() {
        return this.getPollsUseCase.getPolls();
    }
    createPoll(data) {
        const poll = this.pollMapper.mapToEntity(data);
        return this.createPollUseCase.createPoll(poll);
    }
    votePoll(id, data) {
        return this.votePollUseCase.createPoll(parseInt(id), data.optionID, data.email);
    }
};
exports.PollController = PollController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PollController.prototype, "getPolls", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_poll_input_1.CreatePollInput]),
    __metadata("design:returntype", void 0)
], PollController.prototype, "createPoll", null);
__decorate([
    (0, common_1.Post)('/:id/votes'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, vote_poll_input_1.VotePollInput]),
    __metadata("design:returntype", void 0)
], PollController.prototype, "votePoll", null);
exports.PollController = PollController = __decorate([
    (0, common_1.Controller)('polls'),
    (0, swagger_1.ApiTags)('polls'),
    __metadata("design:paramtypes", [create_poll_use_case_1.CreatePollUseCase,
        get_polls_use_case_1.GetPollsUseCase,
        vote_poll_use_case_1.VotePollUseCase,
        poll_mapper_1.PollMapper])
], PollController);
//# sourceMappingURL=poll.controller.js.map