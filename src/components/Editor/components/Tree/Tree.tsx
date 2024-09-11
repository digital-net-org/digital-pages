import { type PropsWithChildren } from 'react';
import { t } from 'i18next';
import { Puck } from '@measured/puck';
import { SdText } from '@/digital-ui';
import './styles.css';

type TreeProps = PropsWithChildren;

export default function Tree(props: TreeProps) {
    return (
        <div className="Editor-tree">
            <SdText variant="caption">{t('editor:tools.tree.title')}</SdText>
            <Puck.Outline />
        </div>
    );
}
