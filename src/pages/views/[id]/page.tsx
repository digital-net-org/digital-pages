import type { ViewModel } from '@/models';
import { Edit, Icon, Loader } from '@digital-net/react-digital-ui';
import EntityForm from '@digital-net/react-digital-ui/components/Form/EntityForm/EntityForm';
import useEntityForm from '@digital-net/react-digital-ui/components/Form/EntityForm/useEntityForm';

export default function ViewPage() {
    const {
        payload,
        setPayload,
        id,
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
                {
                    isQuerying || !payload 
                        ? <Loader /> 
                        : <EntityForm 
                                id={id}
                                schema={schema} 
                                value={payload} 
                                onChange={setPayload} 
                                onSubmit={handlePatch} 
                            />
                }
            </Edit>
        </div>
    );
}
