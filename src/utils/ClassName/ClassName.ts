export default class ClassName {
    private static composedKeywords = ['variant', 'color', 'size', 'direction'];
    private static boolKeywords = [
        'loading',
        'visible',
        'disabled',
        'selected',
        'fullwidth',
        'animation',
        'bold',
        'italic',
        'error',
    ];

    public static composeKey = (...str: Array<string | undefined>) => str.filter(Boolean).join('-');

    public static resolve = (base: string, props?: Record<string, any>) => {
        const classNames = [base, props?.className].filter(v => v !== undefined);
        Object.keys(props || {}).forEach(prop => {
            const value = props?.[prop];
            if (prop === 'onClick') classNames.push(ClassName.composeKey(base, 'action'));
            if (ClassName.composedKeywords.includes(prop) && value)
                classNames.push(ClassName.composeKey(base, prop, value));
            else if (ClassName.boolKeywords.includes(prop) && value)
                classNames.push(ClassName.composeKey(base, prop));
        });
        return classNames.join(' ');
    };
}
