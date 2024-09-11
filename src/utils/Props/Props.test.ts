import { expect, test } from 'vitest';
import Props from './Props';

test('Props.toHtmlProps(): with booleans should convert values to strings', () => {
    const props = { disabled: true, visible: false, id: 'button-1', includeStuff: true, className: 'lol' };
    const expected = {
        disabled: 'true',
        visible: 'false',
        id: 'button-1',
        includestuff: 'true',
        className: 'lol',
    };
    expect(Props.toHtmlProps(props)).toEqual(expected);
});
