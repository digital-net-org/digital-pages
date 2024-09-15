import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

export default function useUrlParams<T>() {
    const { search } = useLocation();
    const navigate = useNavigate();

    const params = React.useMemo(
        () => Object.fromEntries(new URLSearchParams(search).entries()),
        [search],
    ) as T;

    const setParams = React.useCallback(
        (newParams: Partial<T>) => {
            const updatedParams = { ...params, ...newParams };
            navigate({ search: new URLSearchParams(updatedParams as Record<string, string>).toString() });
        },
        [params, navigate],
    );

    return { params, setParams };
}
