import { type Config } from '@measured/puck';

export const digitalConfig: Config = {
    categories: {
        blocks: {
            title: 'Blocks',
            components: ['Page'],
        },
        typography: {
            title: 'Typography',
            components: ['Text'],
        },
    },
    components: {
        Page: {
            render: ({ puck: { renderDropZone } }) => <div>{renderDropZone({ zone: 'page-content' })}</div>,
        },
        Text: {
            fields: {
                content: {
                    type: 'textarea',
                    label: 'Content',
                },
            },
            render: ({ content }) => <div>{content}</div>,
        },
    },
};
