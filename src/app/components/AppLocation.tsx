import React from 'react';
import { Box } from '@digital-net/react-digital-ui';
import { useDigitalRouter } from '@digital-net/react-digital';

export default function AppLocation() {
    const { current } = useDigitalRouter();
    return (
        <Box justify="center" fullWidth>
            {current?.documentName ?? null}
        </Box>
    );
}
