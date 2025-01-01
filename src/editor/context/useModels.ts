import React from 'react';
import { useUrlState } from '@/router';
import { type Entity, EntityHelper } from '@digital-net/core';

interface Props<T extends Entity> {
    models: T[];
}

export default function useModels<T extends Entity>({ models }: Props<T>) {
    const [selectedModelId, setSelectedModelId] = useUrlState('model');

    const selectedModel = React.useMemo(() => {
        const resolved
            = EntityHelper.getById(models, selectedModelId) ?? EntityHelper.getLatest(models) ?? models[0];
        return resolved;
    }, [models, selectedModelId]);

    const selectModel = React.useCallback(
        (id?: string | number) =>
            setSelectedModelId(selectedModel?.id === id ? undefined : models.find(e => e.id === id)?.id),
        [models, selectedModel, setSelectedModelId],
    );

    return {
        selectedModel,
        selectModel,
    };
}
