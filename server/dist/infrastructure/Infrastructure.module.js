"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const domain_module_1 = require("../domain/domain.module");
const prisma_service_1 = require("./repositories/concretes/persistence/prisma.service");
const poll_repository_1 = require("./repositories/concretes/persistence/poll.repository");
const poll_repository_2 = require("./repositories/concretes/in-memory/poll.repository");
let InfrastructureModule = class InfrastructureModule {
};
exports.InfrastructureModule = InfrastructureModule;
exports.InfrastructureModule = InfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_module_1.DomainModule],
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: 'IPollRepository',
                useClass: process.env.PERSISTENT_DATA === 'true'
                    ? poll_repository_1.PollRepositoryPersistence
                    : poll_repository_2.PollRepositoryMemory,
            },
            poll_repository_1.PollRepositoryPersistence,
            poll_repository_2.PollRepositoryMemory,
        ],
        exports: ['IPollRepository'],
    })
], InfrastructureModule);
//# sourceMappingURL=Infrastructure.module.js.map