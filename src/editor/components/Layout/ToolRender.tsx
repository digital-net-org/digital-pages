import { type PropsWithChildren } from 'react';
import { Box } from '@digital-net/react-ui';

interface ToolRenderProps extends PropsWithChildren {
    id: string;
}

export default function ToolRender(props: ToolRenderProps) {
    return props.id ? <Box className="Editor-tool-render" {...props} /> : null;
}
