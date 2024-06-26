import { Module, forwardRef } from '@nestjs/common';
import { SecurityService } from './security.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[forwardRef(() => UserModule)],
  providers: [SecurityService],
  exports:[SecurityService]
})
export class SecurityModule {}
