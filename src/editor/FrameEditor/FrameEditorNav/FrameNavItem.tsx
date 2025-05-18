import type { Entity } from '@digital-lib/dto';
import { useStoredEntity } from '@digital-lib/react-digital';
import { Text, Box, Button, Icon } from '@digital-lib/react-digital-ui';
import type { FrameModel } from '@/dto';
import { FrameEditorHelper } from '../FrameEditorHelper';

interface Props {
    frame: FrameModel;
    onSelect: (id: FrameModel['id']) => void;
    selected: boolean;
    isLoading: boolean;
}

export function FrameNavItem<T extends Entity>({ frame, onSelect, selected, isLoading }: Props) {
    const { storedExists } = useStoredEntity<T>(FrameEditorHelper.store, frame?.id);
    return (
        <Box direction="row" align="center" justify="space-between" fullWidth gap={1}>
            <Button
                variant="icon"
                disabled={isLoading}
                selected={selected}
                fullWidth
                onClick={() => (!isLoading ? onSelect(frame.id) : void 0)}
            >
                <Box direction="row" justify="space-between" gap={1} fullWidth>
                    <Text>{frame.name}</Text>
                    <Text variant="span" size="small" italic disabled>
                        {frame.version}
                    </Text>
                </Box>
            </Button>
            <Box visible={storedExists}>
                <Icon.CircleFill size="x-small" />
            </Box>
        </Box>
    );
}
