import { Preview } from '@storybook/react';
import '@digital-net/react-digital/Application/App/fontsources';
import '@digital-net/react-digital/Application/App/App.styles.css';
import '@digital-net/react-digital-ui/digital.net.defaults.css';
import '../src/app/styles.theme.css';
import { decorators, globalTypes, initialGlobals, parameters } from '../packages/digital-lib/storybook';

export default { decorators, parameters, initialGlobals, globalTypes } satisfies Preview;
