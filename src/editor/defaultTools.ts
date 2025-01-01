import React from 'react';
import { Icon } from '@digital-net/react-ui';
import { ModelSelector } from './components';

export const defaultToolKey = 'select' as const;

export default [
    {
        key: defaultToolKey,
        icon: Icon.FolderIcon,
        render: React.createElement(ModelSelector),
    },
];
