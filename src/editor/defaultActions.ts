import { Icon } from '@digital-net/react-ui';
import { type CrudApiState } from '@/api';
import type { Entity } from '@digital-net/core';

export default [
    {
        key: 'save',
        icon: Icon.FloppyIcon,
        onClick: (model: Entity, api: CrudApiState) => api.patch(model.id, model),
    },
    {
        key: 'delete',
        icon: Icon.TrashIcon,
        onClick: (model: Entity, api: CrudApiState) => api.delete(model.id),
    },
];
