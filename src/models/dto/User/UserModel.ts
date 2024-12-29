import type { Entity } from '../Entity';
import type { AvatarModel } from '../Avatar/AvatarModel';

export interface UserModel extends Entity<string> {
    username: string;
    email: string;
    role: number;
    avatar?: AvatarModel;
    isActive: boolean;
}
