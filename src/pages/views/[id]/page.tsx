import { Edit, Icon, Loader } from '@digital-net/react-digital-ui';
import React from 'react';
import type { ViewModel } from '@/models';
import EntityForm from '@digital-net/react-digital-ui/components/Form/EntityForm/EntityForm';
import useEntityForm from '@digital-net/react-digital-ui/components/Form/EntityForm/useEntityForm';

export default function ViewPage() {
    const {
        id,
        entity,
        schema,
        isLoading,
        isQuerying,
        handleDelete,
        handlePatch,
    } = useEntityForm<ViewModel>('view', 'views');

    return (
        <div>
            <Edit
                renderName={() => id}
                actions={[
                    { icon: Icon.FloppyIcon, disabled: isLoading, formId: id },
                    { icon: Icon.TrashIcon, action: handleDelete, disabled: isLoading },
                ]}
            >
                {isQuerying && !entity ? <Loader /> : null}
                {!isQuerying && entity
                    ? (
                            <EntityForm schema={schema} defaultEntity={entity} onSubmit={handlePatch} id={id} />
                        )
                    : <h2>not found</h2>}
            </Edit>
        </div>
    );
}
