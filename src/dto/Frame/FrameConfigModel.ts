import type { DocumentModel, Entity } from '@digital-lib/dto';

export interface FrameConfigModel extends Entity {
    version: string;
    document: DocumentModel;
}
