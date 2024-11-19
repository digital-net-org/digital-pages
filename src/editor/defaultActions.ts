import { Icon } from '@safari-digital/digital-ui';
import { type CrudApiState } from '@/api';
import { type EntityBase } from '@/models';

export default [
    {
        key: 'save',
        icon: Icon.FloppyIcon,
        onClick: (model: EntityBase, api: CrudApiState) => api.patch(model.id, model),
    },
    {
        key: 'delete',
        icon: Icon.TrashIcon,
        onClick: (model: EntityBase, api: CrudApiState) => api.delete(model.id),
    },
];
