import { Puck } from '@measured/puck';
import { useClassName } from '@/utils';
import './styles.css';

interface RenderProps {
    disabled?: boolean;
}

export default function Render(props: RenderProps) {
    const className = useClassName(props, 'Editor-render');
    return (
        <div className={className}>
            <Puck.Preview />
        </div>
    );
}
