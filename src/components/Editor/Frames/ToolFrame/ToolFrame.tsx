import useEditor from '../../useEditor';
import './styles.css';

export default function ToolFrame() {
    const { activeTool } = useEditor();
    return activeTool ? <div className="Editor-tool">{activeTool.render}</div> : null;
}
