import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CareServiceModule } from './careService/careService.module';

@Module({
  imports: [UserModule,CareServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
