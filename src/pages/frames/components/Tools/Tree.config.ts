import React from 'react';
import { Icon } from '@digital-net/react-ui';
import TreeTool from './Tree.Tool';

export const treeConfig = {
    key: 'tree',
    icon: Icon.DiagramIcon,
    render: React.createElement(TreeTool),
};
