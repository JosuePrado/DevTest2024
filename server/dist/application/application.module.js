"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const domain_module_1 = require("../domain/domain.module");
const Infrastructure_module_1 = require("../infrastructure/Infrastructure.module");
const create_poll_use_case_1 = require("./managers/create-poll.use-case");
const get_polls_use_case_1 = require("./managers/get-polls.use-case");
const vote_poll_use_case_1 = require("./managers/vote-poll.use-case");
let ApplicationModule = class ApplicationModule {
};
exports.ApplicationModule = ApplicationModule;
exports.ApplicationModule = ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_module_1.DomainModule, Infrastructure_module_1.InfrastructureModule],
        controllers: [],
        providers: [create_poll_use_case_1.CreatePollUseCase, get_polls_use_case_1.GetPollsUseCase, vote_poll_use_case_1.VotePollUseCase],
        exports: [create_poll_use_case_1.CreatePollUseCase, get_polls_use_case_1.GetPollsUseCase, vote_poll_use_case_1.VotePollUseCase],
    })
], ApplicationModule);
//# sourceMappingURL=application.module.js.map