import { expect, test } from 'vitest';
import Props from './Props';

test('Props.toHtmlProps(): with booleans should convert values to strings', () => {
    const props = { disabled: true, visible: false, id: 'button-1' };
    const expected = { disabled: 'true', visible: 'false', id: 'button-1' };
    expect(Props.toHtmlProps(props)).toEqual(expected);
});
