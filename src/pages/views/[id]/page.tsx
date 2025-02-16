import type { ViewModel } from '@digital-lib/dto';
import { Edit, Icon, Loader, EntityForm, useEntityForm } from '@digital-lib/react-digital-ui';

export default function ViewPage() {
    const { payload, setPayload, id, schema, isLoading, isQuerying, handleDelete, handlePatch } =
        useEntityForm<ViewModel>('view', 'views');

    return (
        <div>
            <Edit
                renderName={() => id}
                actions={[
                    { icon: Icon.FloppyIcon, disabled: isLoading, formId: id },
                    { icon: Icon.TrashIcon, action: handleDelete, disabled: isLoading },
                ]}
            >
                {isQuerying || !payload ? (
                    <Loader />
                ) : (
                    <EntityForm id={id} schema={schema} value={payload} onChange={setPayload} onSubmit={handlePatch} />
                )}
            </Edit>
        </div>
    );
}
