import { digitalConfig } from '@/lib';
import { Editor } from '@/components';

const fakeData = {
    content: [],
    root: { props: { title: 'Test page' } },
    zones: {},
};

export default function Views() {
    return <Editor data={fakeData} config={digitalConfig} />;
}
