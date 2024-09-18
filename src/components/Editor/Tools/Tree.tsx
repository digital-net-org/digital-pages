import { Puck } from '@measured/puck';
import Tool from '../Tool';
import './Tree.styles.css';
import { t } from 'i18next';

export default function Tree() {
    return (
        <Tool title={t('editor:tools.tree.title')}>
            <div className="Editor-tree">
                <Puck.Outline />
            </div>
        </Tool>
    );
}
