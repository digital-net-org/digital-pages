import { Box, Text } from '@digital-lib/react-digital-ui';
import { useLocalization } from '@digital-lib/react-digital';
import React from 'react';

interface PuckEditorHeaderProps {
    name: string;
    isCurrentMutated: boolean;
}

export default function PuckEditorHeader({ name, isCurrentMutated }: PuckEditorHeaderProps) {
    const { translate } = useLocalization();
    return (
        <Box direction="row" align="center" gap={1}>
            <Text variant="span">{name}</Text>
            <Text variant="span" size="small" italic>
                {isCurrentMutated ? translate('puck:state:modified') : ''}
            </Text>
        </Box>
    );
}
