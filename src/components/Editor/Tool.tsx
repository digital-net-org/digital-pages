import { Box } from '@safari-digital/digital-ui';
import useEditor from './useEditor';
import './Tool.styles.css';

export default function Tool() {
    const { activeTool } = useEditor();
    return activeTool ? (
        <Box className="Editor-tool" p={2} gap={2} fullHeight>
            {activeTool.render}
        </Box>
    ) : null;
}
