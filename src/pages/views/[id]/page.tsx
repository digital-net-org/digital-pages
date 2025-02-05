import { useParams, useNavigate } from 'react-router-dom';
import { Edit, Icon, Loader } from '@digital-net/react-digital-ui';
import { useGetById, useSchema, usePatch, useDelete } from '@digital-net/react-digital-client';
import React from 'react';
import type { ViewModel } from '@/models';
import EntityForm from '@digital-net/react-digital-ui/components/Form/EntityForm/EntityForm';

export default function ViewPage() {
    const { id } = useParams();
    const { entity, isQuerying, invalidateQuery: invalidate } = useGetById<ViewModel>('view', id);
    const { schema, isLoading: isSchemaLoading } = useSchema('/view');
    const navigate = useNavigate();

    const isLoading = React.useMemo(() => isSchemaLoading || isQuerying, [isSchemaLoading, isQuerying]);

    const { patch } = usePatch<ViewModel>('/view', {
        onSuccess: async () => await invalidate(),
    });

    const { delete: _delete } = useDelete('/view', {
        onSuccess: async () => await invalidate(),
    });

    const [formData, setFormData] = React.useState<Partial<ViewModel>>({});

    const handlePatch = React.useCallback(
        async () => {
            if (!id || isLoading) {
                return;
            }
            patch(id, formData);
        },
        [id, isLoading, patch, formData],
    );

    const handleDelete = React.useCallback(
        async () => {
            if (!id || isLoading) {
                return;
            }
            _delete(id);
            navigate('/views');
        },
        [id, isLoading, _delete, navigate],
    );

    return (
        <div>
            <Edit
                renderName={() => id}
                actions={[
                    { icon: Icon.FloppyIcon, action: handlePatch, disabled: isLoading },
                    { icon: Icon.TrashIcon, action: handleDelete, disabled: isLoading },
                ]}
            >
                {isQuerying && !entity ? <Loader /> : null}
                {!isQuerying && entity
                    ? (
                            <EntityForm schema={schema} entity={entity} onChange={setFormData} />
                        )
                    : <h2>not found</h2>}
            </Edit>
        </div>
    );
}
