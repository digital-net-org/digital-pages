import type { ViewModel } from '@/dto';
import { useEntityForm } from '@digital-lib/react-digital-ui';

export default function ViewPage() {
    const { payload, setPayload, id, schema, isLoading, handleDelete, handlePatch, isMutated } =
        useEntityForm<ViewModel>('view', 'views');

    return null;
}
