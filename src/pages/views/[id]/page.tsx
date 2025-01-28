import { useParams } from 'react-router-dom';
import { Edit, Icon } from '@digital-net/react-digital-ui';
import { useGetById } from '@digital-net/react-digital-client';
import React from 'react';

export default function ViewPage() {
    const { id } = useParams();
    const { entity, isQuerying, invalidateQuery: invalidate } = useGetById('view', id);

    console.log('entity', entity);

    const handlePatch = () => {
        console.log('submit');
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
                <form>
                    {id}
                </form>
            </Edit>
        </div>
    );
}
