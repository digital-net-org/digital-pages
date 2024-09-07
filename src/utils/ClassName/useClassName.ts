import React from 'react';
import ClassName from './ClassName';

export default function useClassName(props: Record<string, any>, name: string) {
    return React.useMemo(
        () => ({
            className: ClassName.resolve(name ?? 'SnComponent', props as Record<string, any>),
            ...props,
        }),
        [name, props],
    );
}
