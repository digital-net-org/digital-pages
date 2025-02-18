import type { ViewModel } from '@digital-lib/dto';
import { useEntityForm, EntityPage } from '@digital-lib/react-digital-ui';

export default function ViewPage() {
    const { payload, setPayload, id, schema, isLoading, isQuerying, handleDelete, handlePatch } =
        useEntityForm<ViewModel>('view', 'views');

    return (
        <EntityPage {...{ id, isLoading, isQuerying, handleDelete, handlePatch, schema, payload, setPayload }} />
    );
}
