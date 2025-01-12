import type { Entity } from '@digital-net/core';

export interface AvatarModel extends Entity {
    documentId: string;
    posX: number;
    posY: number;
}
