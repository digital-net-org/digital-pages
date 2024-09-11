import { Puck } from '@measured/puck';
import { useClassName } from '@/utils';
import './styles.css';

interface EditProps {
    disabled?: boolean;
}

export default function Edit(props: EditProps) {
    const className = useClassName(props, 'Editor-edit');
    return (
        <div className={className}>
            <Puck.Fields />
        </div>
    );
}
