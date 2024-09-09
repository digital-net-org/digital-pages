import React from 'react';

export function useOnOpen(open: boolean, callback?: () => void) {
    const [hasOpened, setHasOpened] = React.useState(false);
    React.useEffect(() => {
        if (!hasOpened && open) {
            callback?.();
            setHasOpened(true);
        } else if (hasOpened && !open) {
            setHasOpened(false);
        }
    }, [hasOpened, callback, open]);
}
