import { useEditor } from '../../../utils';
import React from 'react';

export default function Views() {
    const { views } = useEditor();
    return (
        <div>
            {views.map(({ id, title }) => (
                <div key={id}>{title}</div>
            ))}
        </div>
    );
}
