import type { Entity } from '@digital-net/core';
import type { AvatarModel } from '../Avatar/AvatarModel';

export interface UserModel extends Entity {
    username: string;
    email: string;
    role: number;
    avatar?: AvatarModel;
    isActive: boolean;
}
