import React from 'react';
import type { SdPopOverProps } from '@/digital-ui';
import { useWindow } from '@/utils';

export function useOnOpen(open: boolean, anchor: SdPopOverProps['anchor'], callback?: () => void) {
    const window = useWindow();
    const [hasOpened, setHasOpened] = React.useState(false);

    React.useEffect(() => {
        if (!hasOpened && open) {
            callback?.();
            setHasOpened(true);
        } else if (hasOpened && !open) {
            setHasOpened(false);
        }
    }, [hasOpened, callback, open]);

    React.useEffect(() => {
        if (!anchor) return;
        anchor.style.zIndex = open ? '1002' : 'unset';
    }, [anchor, open, window.width]);
}
