import React from 'react';
import type { HTMLDialogElement } from 'happy-dom';
import { type SdPopOverProps } from '@/digital-ui';

export function useAnchor(
    anchor: SdPopOverProps['anchor'],
    placeHolder: HTMLDivElement | null,
    dialog: HTMLDialogElement | null,
    options?: {
        direction?: SdPopOverProps['direction'];
        includeAnchor?: SdPopOverProps['includeAnchor'];
    },
) {
    // FIXME: Should calculate this value from dialog padding
    const paddingMagicNumber = 14;

    const [anchorRect, setAnchorRect] = React.useState<DOMRect | null>(null);
    React.useLayoutEffect(() => (anchor ? setAnchorRect(anchor.getBoundingClientRect()) : void 0), [anchor]);

    // Handles placeholder visibility and size
    React.useLayoutEffect(() => {
        if (placeHolder) {
            placeHolder.style.display = options?.includeAnchor ? 'block' : 'none';
        }
        if (!anchorRect || !placeHolder) return;
        placeHolder.style.minWidth = `${anchorRect?.width}px`;
        placeHolder.style.height = `${anchorRect.bottom - anchorRect.top}px`;
    }, [anchorRect, options, placeHolder]);

    // Dialog includes is placed below the anchor
    React.useLayoutEffect(() => {
        if (!dialog || !anchorRect || options?.includeAnchor) return;
        // Displays the dialog below the anchor
        dialog.style.top = `${anchorRect.bottom}px`;
        dialog.style.left =
            !options?.direction || options?.direction === 'left'
                ? `${anchorRect.left}px`
                : `${anchorRect.right - dialog.offsetWidth}px`;
    }, [anchorRect, dialog, options]);

    // Dialog is placed on top of the anchor and renders it
    React.useLayoutEffect(() => {
        if (!options?.includeAnchor || !dialog || !anchorRect) return;
        const anchorHeight = anchorRect.bottom - anchorRect.top;
        const dialogHeight = dialog.offsetHeight;
        dialog.style.top = `${anchorRect.top + paddingMagicNumber + anchorHeight / 2 - dialogHeight / 2}px`;
        dialog.style.left =
            !options?.direction || options?.direction === 'left'
                ? `${anchorRect.left - paddingMagicNumber}px`
                : `${anchorRect.right + paddingMagicNumber - dialog.offsetWidth}px`;
    }, [anchorRect, dialog, options]);

    React.useLayoutEffect(() => {
        if (!anchor || !dialog) return;
        anchor.style.zIndex = `${Number(dialog.style.zIndex) + 1}`;
    }, [anchor, dialog]);

    return anchorRect;
}
