import { componentsConfig } from './Components.config';
import { treeConfig } from './Tree.config';
import Tree from './Tree';
import Components from './Components';

export default [
    {
        tool: componentsConfig,
        component: Components,
    },
    {
        tool: treeConfig,
        component: Tree,
    },
];