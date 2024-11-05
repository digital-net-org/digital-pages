import React from 'react';
import { Selector } from '../components';
import { Icon } from '@safari-digital/digital-ui';

export default [
    {
        key: 'select',
        icon: Icon.FolderIcon,
        renderTool: React.createElement(Selector),
    },
];
