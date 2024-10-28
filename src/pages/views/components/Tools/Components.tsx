import { EditorTool } from '@/puck';
import { Puck } from '@measured/puck';
import { t } from 'i18next';
import './Components.styles.css';

export default function Components() {
    return (
        <EditorTool title={t('editor:tools.blocks.title')}>
            <div className="PageEditor-tools-components">
                <Puck.Components />
            </div>
        </EditorTool>
    );
}
