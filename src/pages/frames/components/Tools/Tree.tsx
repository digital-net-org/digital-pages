import { Tool } from '@/editor';
import { Puck } from '@measured/puck';
import { t } from 'i18next';

export default function Tree() {
    return (
        <Tool title={t('editor:tools.tree.title')}>
            <div className="FrameEditor-tools-tree">
                <Puck.Outline />
            </div>
        </Tool>
    );
}
