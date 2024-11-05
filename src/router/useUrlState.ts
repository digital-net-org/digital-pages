import React from 'react';
import { useFirstRender } from '@/utils';
import { useUrlParams } from '@/router/index';

export default function useUrlState(stateName: string, defaultValue?: any): [string, (value?: any) => void] {
    const [params, setParams] = useUrlParams();

    useFirstRender(() => {
        if (params[stateName] === undefined && defaultValue !== undefined) {
            setParams(prev => ({ ...prev, [stateName]: defaultValue }));
        }
    });

    const setState = React.useCallback(
        (value?: any) => {
            if (value === undefined) {
                setParams(prev => {
                    delete prev[stateName];
                    return prev;
                });
            } else {
                setParams(prev => ({ ...prev, [stateName]: value }));
            }
        },
        [stateName, setParams],
    );

    return [params[stateName], setState];
}
