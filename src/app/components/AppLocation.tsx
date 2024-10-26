import React from 'react';
import { useRouter } from '@/router';
import { Box } from '@safari-digital/digital-ui';

export default function AppLocation() {
    const { current } = useRouter();
    return (
        <Box justify="center" fullWidth>
            {current?.label ?? null}
        </Box>
    );
}
