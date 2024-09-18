import { t } from 'i18next';
import { Puck } from '@measured/puck';
import Tool from '../Tool';
import './Components.styles.css';

export default function Components() {
    return (
        <Tool title={t('editor:tools.blocks.title')}>
            <div className="Editor-components">
                <Puck.Components />
            </div>
        </Tool>
    );
}
