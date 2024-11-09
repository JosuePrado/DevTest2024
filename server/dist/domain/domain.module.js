"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainModule = void 0;
const common_1 = require("@nestjs/common");
const poll_entity_1 = require("./entities/poll.entity");
const vote_entity_1 = require("./entities/vote.entity");
const poll_mapper_1 = require("./mappers/poll.mapper");
const option_entity_1 = require("./entities/option.entity");
let DomainModule = class DomainModule {
};
exports.DomainModule = DomainModule;
exports.DomainModule = DomainModule = __decorate([
    (0, common_1.Module)({
        providers: [option_entity_1.Option, poll_entity_1.Poll, vote_entity_1.Vote, poll_mapper_1.PollMapper],
        exports: [option_entity_1.Option, poll_entity_1.Poll, vote_entity_1.Vote, poll_mapper_1.PollMapper],
    })
], DomainModule);
//# sourceMappingURL=domain.module.js.map