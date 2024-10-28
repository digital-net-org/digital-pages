import { EditorTool } from '@/puck';
import { Puck } from '@measured/puck';
import { t } from 'i18next';
import './Tree.styles.css';

export default function Tree() {
    return (
        <EditorTool title={t('editor:tools.tree.title')}>
            <div className="PageEditor-tools-tree">
                <Puck.Outline />
            </div>
        </EditorTool>
    );
}
