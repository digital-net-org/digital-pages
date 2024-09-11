import { Puck } from '@measured/puck';
import { t } from 'i18next';
import { SdText } from '@/digital-ui';
import './styles.css';

export default function Blocks() {
    return (
        <div className="Editor-components">
            <SdText variant="caption">{t('editor:tools.blocks.title')}</SdText>
            <Puck.Components />
        </div>
    );
}
