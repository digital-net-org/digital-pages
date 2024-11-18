import { Tool } from '@/editor';
import { Puck } from '@measured/puck';
import { t } from 'i18next';

export default function Components() {
    return (
        <Tool title={t('editor:tools.blocks.title')}>
            <div className="FrameEditor-tools-components">
                <Puck.Components />
            </div>
        </Tool>
    );
}
