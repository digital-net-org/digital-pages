import { type PropsWithChildren } from 'react';

export default function Preview({ children }: PropsWithChildren) {
    return <div className="Editor-preview">{children}</div>;
}
