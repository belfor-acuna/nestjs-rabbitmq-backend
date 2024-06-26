export declare class SecurityService {
    generateSalt(): Promise<any>;
    generateHash(password: string, salt: string): Promise<any>;
}
