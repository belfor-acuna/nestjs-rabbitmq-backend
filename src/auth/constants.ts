import { ConfigService } from "@nestjs/config"
export const jwtConstants = {
    get secret(): string {
        return new ConfigService().get<string>('JWT_SECRET');
    }
}