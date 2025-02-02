import type { Entity } from '@digital-lib/core';

export interface AvatarModel extends Entity {
    documentId: string;
    posX: number;
    posY: number;
}
