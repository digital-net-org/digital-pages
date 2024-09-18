import RenderFrame from './Frames/RenderFrame';
import EditFrame from './Frames/EditFrame';
import ViewConfigFrame from './Frames/ViewConfigFrame';
import Components from './Tools/Components';
import Tree from './Tools/Tree';
import Views from './Tools/Views';

export const PageEditor = Object.assign(
    {},
    {
        Frames: {
            Render: RenderFrame,
            Edit: EditFrame,
            ViewConfig: ViewConfigFrame,
        },
        Tools: {
            Components,
            Tree,
            Views,
        },
    },
);
