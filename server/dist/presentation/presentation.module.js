"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentationModule = void 0;
const common_1 = require("@nestjs/common");
const application_module_1 = require("../application/application.module");
const domain_module_1 = require("../domain/domain.module");
const create_poll_input_1 = require("./dtos/input/create-poll.input");
const poll_controller_1 = require("./controllers/poll.controller");
let PresentationModule = class PresentationModule {
};
exports.PresentationModule = PresentationModule;
exports.PresentationModule = PresentationModule = __decorate([
    (0, common_1.Module)({
        imports: [application_module_1.ApplicationModule, domain_module_1.DomainModule],
        controllers: [poll_controller_1.PollController],
        providers: [create_poll_input_1.CreatePollInput],
    })
], PresentationModule);
//# sourceMappingURL=presentation.module.js.map