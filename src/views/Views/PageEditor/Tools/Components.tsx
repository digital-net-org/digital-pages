import { t } from 'i18next';
import { Puck } from '@measured/puck';
import { EditorTool } from '@/components';
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
