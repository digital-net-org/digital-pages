import type { ViewModel } from '@/dto';
import { useEntityForm, EntityPage } from '@digital-lib/react-digital-ui';

export default function ViewPage() {
    const { payload, setPayload, id, schema, isLoading, handleDelete, handlePatch, isMutated } =
        useEntityForm<ViewModel>('view', 'views');

    return (
        <EntityPage
            {...{ id, isLoading, isMutated, schema, payload, setPayload }}
            onSave={handlePatch}
            onDelete={handleDelete}
            title={payload?.title}
        />
    );
}
