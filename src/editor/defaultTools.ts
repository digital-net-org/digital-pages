import React from 'react';
import { Icon } from '@safari-digital/digital-ui';
import { ModelSelector } from './components';

export const defaultToolKey = 'select' as const;

export default [
    {
        key: defaultToolKey,
        icon: Icon.FolderIcon,
        render: React.createElement(ModelSelector),
    },
];
