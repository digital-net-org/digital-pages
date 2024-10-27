import React from 'react';
import useCreate from './useCreate';
import useGet from './useGet';

export default function useViewApi() {
    const { views, isQuerying } = useGet();
    const { create, isCreating } = useCreate();

    const loading = React.useMemo(() => isCreating || isQuerying, [isCreating, isQuerying]);
    return {
        views,
        create,
        loading,
    };
}
