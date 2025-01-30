import { useParams } from 'react-router-dom';
import { Edit, Icon, Loader } from '@digital-net/react-digital-ui';
import { useGetById, useSchema } from '@digital-net/react-digital-client';
import React from 'react';
import type { ViewModel } from '@/models';
import EntityForm from '@digital-net/react-digital-ui/components/Form/EntityForm/EntityForm';

export default function ViewPage() {
    const { id } = useParams();
    const { entity, isQuerying, invalidateQuery: invalidate } = useGetById<ViewModel>('view', id);
    const { schema, isLoading: isSchemaLoading } = useSchema('/view');

    const [formData, setFormData] = React.useState<Partial<ViewModel>>({});

    const handlePatch = () => {
        console.log('Submitting:', formData);
    };

    const handleDelete = () => {
        console.log('Delete');
    };

    return (
        <div>
            <Edit
                renderName={() => id}
                actions={[
                    { icon: Icon.FloppyIcon, action: handlePatch },
                    { icon: Icon.TrashIcon, action: handleDelete },
                ]}
            >
                {isQuerying && !entity ? <Loader /> : null}
                {!isQuerying && entity
                    ? (
                            <EntityForm schema={schema} entity={entity} onFormChange={setFormData} />
                        )
                    : <h2>not found</h2>}
            </Edit>
        </div>
    );
}
