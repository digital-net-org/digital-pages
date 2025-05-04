import type { Entity } from '@digital-lib/dto';
import { useStoredEntity } from '@digital-lib/react-digital';
import { Box, Button, Icon } from '@digital-lib/react-digital-ui';
import type { FrameModel } from '@/dto';
import FrameEditorHelper from '../FrameEditorHelper';

interface Props {
    entity: FrameModel;
    onSelect: (id: FrameModel['id']) => void;
    selected: boolean;
    isLoading: boolean;
}

export function FrameNavItem<T extends Entity>({ entity, onSelect, selected, isLoading }: Props) {
    const { storedExists } = useStoredEntity<T>(FrameEditorHelper.store, entity?.id);
    return (
        <Button
            key={entity?.id}
            variant="icon"
            disabled={isLoading}
            selected={selected}
            fullWidth
            onClick={() => (!isLoading ? onSelect(entity.id) : void 0)}
        >
            <Box direction="row" align="center" justify="space-between" fullWidth gap={1}>
                {entity.name}
                {storedExists && <Icon.CircleFill size="x-small" />}
            </Box>
        </Button>
    );
}
