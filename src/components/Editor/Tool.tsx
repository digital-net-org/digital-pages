import useEditor from './useEditor';
import './Tool.styles.css';

export default function Tool() {
    const { activeTool } = useEditor();
    return activeTool ? <div className="Editor-tool">{activeTool.render}</div> : null;
}
