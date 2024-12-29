import { Icon } from '@safari-digital/digital-ui';
import { type CrudApiState } from '@/api';
import { type Entity } from '@/models';

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
