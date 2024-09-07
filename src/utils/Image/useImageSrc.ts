import React from 'react';

export default function useImageSrc(src: string | undefined) {
    const isValid = React.useMemo(() => {
        if (!src) return false;
        const img = new Image();
        img.src = src;
        img.onload = () => true;
        img.onerror = () => {
            console.error(`${APP_ERROR_PREFIX} Image could not be loaded: ${src}`);
            return false;
        };
    }, [src]);

    return { isValid };
}
