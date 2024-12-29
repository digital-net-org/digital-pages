import EditorComponent from './Editor';
import { Preview, ToolRender } from './components';
import { EditorProvider } from './context';

export { default as useEditor } from './useEditor';
export { default as Tool } from './components/Tool';

export const Editor = Object.assign(EditorComponent, {
    Provider: EditorProvider,
    Preview,
    ToolRender,
});
