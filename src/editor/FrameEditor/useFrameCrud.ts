import React from 'react';
import { StringIdentity } from '@digital-lib/core';
import { useCreate, useDelete, useGet, useGetById, usePatch } from '@digital-lib/react-digital-client';
import type { FrameModel } from '@/dto';
import { useFrameUrlState } from './useFrameUrlState';
import { PuckEditorHelper } from './PuckEditor';
import { FrameEditorHelper } from './FrameEditorHelper';

export function useFrameCrud(config: {
    stored: FrameModel | undefined;
    onDelete: () => Promise<void> | void;
    onPatch: () => Promise<void> | void;
}) {
    const { currentFrame, reset } = useFrameUrlState();
    const { entities, ...getAll } = useGet<FrameModel>(FrameEditorHelper.apiUrl);
    const { entity, ...getByIdApi } = useGetById<FrameModel>(FrameEditorHelper.apiUrl, currentFrame);

    const { isCreating, ...createApi } = useCreate<FrameModel>(FrameEditorHelper.apiUrl, {
        onSuccess: async () => {
            FrameEditorHelper.invalidateGetAll();
        },
    });

    const { isDeleting, ...deleteApi } = useDelete(FrameEditorHelper.apiUrl, {
        onSuccess: async () => {
            reset();
            await config.onDelete();
            FrameEditorHelper.invalidateGetById(currentFrame);
            FrameEditorHelper.invalidateGetAll();
        },
    });

    const { isPatching, ...patchApi } = usePatch<FrameModel>(FrameEditorHelper.apiUrl, {
        onSuccess: async () => {
            await config.onPatch();
            FrameEditorHelper.invalidateGetById(currentFrame);
            FrameEditorHelper.invalidateGetAll();
        },
    });

    const isLoading = React.useMemo(
        () => getAll.isQuerying || getByIdApi.isQuerying || isCreating || isPatching || isDeleting,
        [getAll.isQuerying, getByIdApi.isQuerying, isCreating, isPatching, isDeleting]
    );

    const handleCreate = React.useCallback(async () => {
        if (!isLoading) {
            createApi.create({
                data: JSON.stringify(PuckEditorHelper.default),
                name: StringIdentity.generate(),
            });
        }
    }, [createApi, isLoading]);

    const handleDelete = React.useCallback(async () => {
        if (entity && !isLoading) {
            deleteApi.delete(entity.id);
        }
    }, [entity, isLoading, deleteApi]);

    const handlePatch = React.useCallback(async () => {
        if (!entity || !config.stored || isLoading) {
            return;
        }
        patchApi.patch(entity.id, { ...config.stored, data: JSON.stringify(config.stored.data) });
    }, [entity, isLoading, config.stored, patchApi]);

    return { handleCreate, handleDelete, handlePatch, isLoading, frame: entity, frameList: entities };
}
