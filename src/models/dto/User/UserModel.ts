import type { EntityBase } from '../EntityBase';
import type { AvatarModel } from '../Avatar/AvatarModel';

export interface UserModel extends EntityBase<string> {
    username: string;
    email: string;
    role: number;
    avatar?: AvatarModel;
    isActive: boolean;
}
