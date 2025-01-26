import { useParams } from 'react-router-dom';
import { Edit, Icon } from '@digital-net/react-digital-ui';

export default function ViewPage() {
    const { id } = useParams();
    return (
        <div>
            <Edit
                renderName={() => id}
                actions={[
                    { icon: Icon.FloppyIcon, action: () => console.log('TODO') },
                    { icon: Icon.TrashIcon, action: () => console.log('TODO') },
                ]}
            >
                TODO: Form
            </Edit>
        </div>
    );
}
