import React from 'react';
import ClassName from './ClassName';

export default function useClassName(props: Record<string, any>, name: string) {
    return React.useMemo(
        () => ClassName.resolve(name ?? 'SnComponent', props as Record<string, any>),
        [name, props],
    );
}
