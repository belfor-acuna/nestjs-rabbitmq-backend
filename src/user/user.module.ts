import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { RolesGuard } from 'src/user/roles/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { SecurityModule } from 'src/security/security.module';
import { SecurityService } from 'src/security/security.service';

@Module({
  imports: [forwardRef(() => SecurityModule),TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
    RolesGuard,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [UserService],
})
export class UserModule {}