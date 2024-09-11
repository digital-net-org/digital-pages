import React, { useState } from 'react';

export default function useWindow() {
    const [width, setWidth] = useState(window.innerWidth);

    React.useLayoutEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { width };
}
