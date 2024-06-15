import { ROLES } from "./roles.enum";
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: ROLES[]) => import("@nestjs/common").CustomDecorator<string>;
