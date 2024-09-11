export default class Props {
    public static toHtmlProps(props: Record<string, unknown>) {
        for (const key in { ...props }) {
            if (typeof props[key] === 'boolean') props[key] = props[key].toString();

            if (!/(class|on)([A-Z]).*/g.test(key) && /([a-z0-9])([A-Z])/g.test(key)) {
                props[key.toLowerCase()] = props[key];
                delete props[key];
            }
        }
        return props;
    }
}
