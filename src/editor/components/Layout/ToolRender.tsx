import { type PropsWithChildren } from 'react';

interface ToolRenderProps extends PropsWithChildren {
    id: string;
}

export default function ToolRender(props: ToolRenderProps) {
    return props.id ? <div className="Editor-tool-render" {...props} /> : null;
}
