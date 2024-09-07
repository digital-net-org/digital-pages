export default class Props {
    public static toHtmlProps(props: Record<string, unknown>) {
        for (const key in props) if (typeof props[key] === 'boolean') props[key] = props[key].toString();
        return props;
    }
}
