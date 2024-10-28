import type { Config, Data } from '@measured/puck';

export const defaultPuckConfig: Config = { components: {} };

export const defaultPuckData: Data = {
    root: { props: { title: '' } },
    zones: {},
    content: [],
};
