import { Localization } from '@digital-lib/react-digital';
import { Box, IconButton, Text } from '@digital-lib/react-digital-ui';
import type { FrameModel } from '@/dto';
import FrameEditorHelper from '../FrameEditorHelper';
import { FrameNavItem } from './FrameNavItem';

export interface FrameNavProps {
    entity: FrameModel | undefined;
    entities: Array<FrameModel>;
    onSelect: (id: FrameModel['id']) => void;
    onCreate: () => void;
    onClose: () => void;
    isLoading: boolean;
}

export function FrameNav({ entity, entities, onSelect, onCreate, onClose, isLoading }: FrameNavProps) {
    return (
        <div className={`${FrameEditorHelper.className}-Nav`}>
            <div className={`${FrameEditorHelper.className}-Nav-Title`}>
                <Text variant="caption">{Localization.translate('frame-editor:navigation.title')}</Text>
                <Box direction="row" gap={1}>
                    <IconButton icon="AddIcon" onClick={onCreate} />
                    <IconButton icon="CloseIcon" variant="icon-bordered" onClick={onClose} critical />
                </Box>
            </div>
            <div className={`${FrameEditorHelper.className}-Nav-List`}>
                {(entities ?? []).map(e => (
                    <FrameNavItem
                        entity={e}
                        key={e.id}
                        onSelect={onSelect}
                        selected={e.id === entity?.id}
                        isLoading={isLoading}
                    />
                ))}
            </div>
        </div>
    );
}
