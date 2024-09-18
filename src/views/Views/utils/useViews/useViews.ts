import React from 'react';
import { useViewApi } from './api';
import { type ViewModel } from '@/models';

export default function useViews() {
    const viewApi = useViewApi();
    const [selectedView, setSelectedView] = React.useState<ViewModel | undefined>(undefined);

    return {
        ...viewApi,
        selectedView,
        setSelectedView,
    };
}
