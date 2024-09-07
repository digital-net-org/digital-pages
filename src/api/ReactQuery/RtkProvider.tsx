import React, { type PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

export default function RtkProvider(props: PropsWithChildren) {
    return <QueryClientProvider client={queryClient} {...props} />;
}
