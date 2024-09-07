import type { EntityBase, Guid } from '../EntityBase';

export interface AvatarModel extends EntityBase {
    documentId: Guid;
    posX: number;
    posY: number;
}
