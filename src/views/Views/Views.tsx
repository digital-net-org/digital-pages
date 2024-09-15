import { digitalConfig } from '@/lib';
import { Editor } from '@/components';
import React from 'react';

export default function Views() {
    return <Editor config={digitalConfig} />;
}
