import { Puck } from '@measured/puck';
import './Tree.styles.css';
import { t } from 'i18next';
import { EditorTool } from '@/components';

export default function Tree() {
    return (
        <EditorTool title={t('editor:tools.tree.title')}>
            <div className="PageEditor-tools-tree">
                <Puck.Outline />
            </div>
        </EditorTool>
    );
}
