import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class SecurityService {

    async generateSalt(){
        return bcrypt.genSalt();
    }

    async generateHash(password: string, salt: string){
        return await bcrypt.hash(password,salt)
    }

}
