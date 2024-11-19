import React from 'react';
import { ModelSelector } from './components';
import { Icon } from '@safari-digital/digital-ui';

export const defaultToolKey = 'select' as const;

export default [
    {
        key: defaultToolKey,
        icon: Icon.FolderIcon,
        renderTool: React.createElement(ModelSelector),
    },
];
