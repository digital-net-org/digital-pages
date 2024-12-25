import type {Entity} from '../Entity';

export interface AvatarModel extends Entity<string> {
    documentId: string;
    posX: number;
    posY: number;
}
