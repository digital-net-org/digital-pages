import React, { type PropsWithChildren } from 'react';
import Props from './Props';

export default function useProps<T extends (Partial<unknown> & React.Attributes) & PropsWithChildren>({
    children: propsChildren,
    ...props
}: T) {
    const htmlProps = React.useMemo(() => Props.toHtmlProps(props), [props]);

    const mapProps = React.useCallback(
        (children?: React.ReactNode | undefined) =>
            React.Children.map(children ?? propsChildren, c =>
                React.isValidElement(c) ? React.cloneElement(c, htmlProps) : c,
            ),
        [htmlProps, propsChildren],
    );

    return { mapProps, htmlProps };
}
