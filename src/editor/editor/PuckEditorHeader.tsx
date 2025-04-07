import React from 'react';
import { Localization } from '@digital-lib/react-digital';
import { Box, Text } from '@digital-lib/react-digital-ui';

interface PuckEditorHeaderProps {
    name: string;
    isCurrentMutated: boolean;
}

export default function PuckEditorHeader({ name, isCurrentMutated }: PuckEditorHeaderProps) {
    return (
        <Box direction="row" align="center" gap={1}>
            <Text variant="span">{name}</Text>
            <Text variant="span" size="small" italic>
                {isCurrentMutated ? Localization.translate('puck:state:modified') : ''}
            </Text>
        </Box>
    );
}
