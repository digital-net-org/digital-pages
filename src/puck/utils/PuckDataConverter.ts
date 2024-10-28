import { type Data, type Config, Render } from '@measured/puck';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default class PuckDataConverter {
    public static toStaticMarkup(data: Data, config: Config) {
        return renderToStaticMarkup(React.createElement(Render, { data, config }));
    }
}
