import type { EntityBase } from '../EntityBase';

export interface AvatarModel extends EntityBase<string> {
    documentId: string;
    posX: number;
    posY: number;
}
