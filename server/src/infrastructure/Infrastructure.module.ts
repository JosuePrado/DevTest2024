import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { PrismaService } from './repositories/concretes/persistence/prisma.service';
import { PollRepositoryPersistence } from './repositories/concretes/persistence/poll.repository';
import { PollRepositoryMemory } from './repositories/concretes/in-memory/poll.repository';

@Module({
  imports: [DomainModule],
  providers: [
    PrismaService,
    {
      provide: 'IPollRepository',
      useClass:
        process.env.PERSISTENT_DATA === 'true'
          ? PollRepositoryPersistence
          : PollRepositoryMemory,
    },
    PollRepositoryPersistence,
    PollRepositoryMemory,
  ],
  exports: ['IPollRepository'],
})
export class InfrastructureModule {}
