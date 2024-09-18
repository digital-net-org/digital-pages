import EditorComponent from './Editor';
import Toolbar from './Toolbar';
import { Components, Tree } from './Tools';
import { EditFrame, RenderFrame, ToolFrame } from './Frames';

export const Editor = Object.assign(EditorComponent, {
    Toolbar,
    Tools: Object.assign(ToolFrame, { Components, Tree }),
    Render: RenderFrame,
    Edit: EditFrame,
});

export { default as EditorTool } from './Tool';
export { default as useEditor } from './useEditor';
