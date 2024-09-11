import { digitalConfig } from '@/lib';
import { Editor } from '@/components';
import { useDigitalQuery } from '@/api';
import { type QueryResult, type ViewModel } from '@/models';
import React from 'react';

const fakeData = {
    content: [],
    root: { props: { title: 'New Page' } },
    zones: {},
};

export default function Views() {
    const { data, isLoading } = useDigitalQuery<QueryResult<ViewModel>>('/view');
    React.useEffect(() => console.log(data), [data]);
    return <Editor config={digitalConfig} />;
}
