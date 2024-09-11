import React, { type PropsWithChildren } from 'react';
import { type Config, type Data, Puck, usePuck } from '@measured/puck';
import { useClassName } from '@/utils';
import Edit from './components/Edit/Edit';
import Render from './components/Render/Render';
import Toolbar from './components/Toolbar/Toolbar';
import './styles.css';

export interface EditorProps {
    data?: Data;
    config?: Config;
    onPublish?: () => void;
    disabled?: boolean;
}

export const defaultPuckConfig: Config = { components: {} };

const defaultPuckData: Data = {
    root: { props: { title: '' } },
    zones: {},
    content: [],
};

export default function Editor({ disabled, ...props }: EditorProps) {
    const className = useClassName({ disabled }, 'Editor');
    return (
        <Wrapper {...props}>
            <Handler>
                <div className={className}>
                    <Toolbar {...{ ...props, disabled }} />
                    <Render {...{ ...props, disabled }} />
                    <Edit {...{ ...props, disabled }} />
                </div>
            </Handler>
        </Wrapper>
    );
}

function Handler({ children }: PropsWithChildren) {
    const { appState } = usePuck();
    React.useEffect(() => console.log(appState), [appState]);
    return children;
}

function Wrapper(props: EditorProps) {
    const resolvedProps = React.useMemo(
        () => ({
            data: props.disabled ? defaultPuckData : props.data || defaultPuckData,
            config: props.disabled ? defaultPuckConfig : props.config || defaultPuckConfig,
        }),
        [props.data, props.config, props.disabled],
    );
    return <Puck {...props} {...resolvedProps} />;
}
